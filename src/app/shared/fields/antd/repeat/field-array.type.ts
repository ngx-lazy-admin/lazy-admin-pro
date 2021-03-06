import { Inject, Optional } from '@angular/core';
import { FormArray } from '@angular/forms';

import { clone, isNullOrUndefined, assignFieldValue } from './utils';
// import { registerControl, unregisterControl, findControl } from '../extensions/field-form/utils';

import { Directive } from '@angular/core';
import { FieldType, FormlyExtension, FormlyFieldConfig, FormlyFormBuilder, FORMLY_CONFIG } from '@ngx-formly/core';

export interface FieldArrayTypeConfig extends FormlyFieldConfig {
  formControl: FormArray;
  templateOptions: NonNullable<FormlyFieldConfig['templateOptions']>;
  options: NonNullable<FormlyFieldConfig['options']>;
}

// TODO remove `selector` in V6
// tslint:disable-next-line
@Directive({ selector: '[ɵfieldArray]' })
export abstract class FieldArrayType<F extends FormlyFieldConfig = FormlyFieldConfig> extends FieldType<any> implements FormlyExtension {
  field: F;
  defaultOptions: any = {
    defaultValue: [],
  };

  get formControl() {
    return this.field.formControl as FormArray;
  }

  constructor(@Inject(FORMLY_CONFIG) @Optional() builder?: FormlyFormBuilder) {
    super();

    if (builder instanceof FormlyFormBuilder) {
      console.warn(`NgxFormly: passing 'FormlyFormBuilder' to '${this.constructor.name}' type is not required anymore, you may remove it!`);
    }
  }

  onPopulate(field: FormlyFieldConfig) {
    if (!field.formControl && field.key) {
      const control = findControl(field);
      registerControl(field, control ? control : new FormArray([], { updateOn: field.modelOptions.updateOn }));
    }

    field.fieldGroup = field.fieldGroup || [];

    const length = field.model ? field.model.length : 0;
    if (field.fieldGroup.length > length) {
      for (let i = field.fieldGroup.length - 1; i >= length; --i) {
        unregisterControl(field.fieldGroup[i], true);
        field.fieldGroup.splice(i, 1);
      }
    }

    for (let i = field.fieldGroup.length; i < length; i++) {
      const f = { ...clone(field.fieldArray), key: `${i}` };
      field.fieldGroup.push(f);
    }
  }

  add(i?: number, initialModel?: any, { markAsDirty } = { markAsDirty: true }) {
    i = isNullOrUndefined(i) ? this.field.fieldGroup.length : i;
    if (!this.model) {
      assignFieldValue(this.field, []);
    }

    this.model.splice(i, 0, initialModel ? clone(initialModel) : undefined);

    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }

  remove(i: number, { markAsDirty } = { markAsDirty: true }) {
    this.model.splice(i, 1);
    unregisterControl(this.field.fieldGroup[i], true);
    this.field.fieldGroup.splice(i, 1);
    this.field.fieldGroup.forEach((f, key) => f.key = `${key}`);

    this._build();
    markAsDirty && this.formControl.markAsDirty();
  }

  private _build() {
    (<any> this.options)._buildField(this.field);
    (<any> this.options)._trackModelChanges(true);
  }
}