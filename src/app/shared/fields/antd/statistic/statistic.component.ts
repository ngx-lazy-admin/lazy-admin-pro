import { 
  Component,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
  Injector,
  ComponentRef
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkPortalOutletAttachedRef } from '@angular/cdk/portal';
import { FieldType } from '@ngx-formly/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { ShareFieldType } from '../share-field.type';
import { pipeTokenType } from 'src/app/pipes';

export interface NzSelectOptionInterface {
  label: string | number | null ;
  value: NzSafeAny | null;
  disabled?: boolean;
  hide?: boolean;
  groupLabel?: string | number | null;
}

@Component({
  selector: 'div[statistic-field]',
  template: `
    <nz-statistic 
      [nzSuffix]="nzSuffix || suffixTemplateRef"
      [nzPrefix]="nzPrefix || prefixTemplateRef"
      [nzValueStyle]="nzValueStyle"
      [nzValueTemplate]="nzValueTemplate"
      [nzValue]="(nzValue | dynamic: valuePipe: valuePipeArgs)!" 
      [nzTitle]="nzTitle">
    </nz-statistic>
    <br>

    <ng-template #prefixTemplateRef>
      <ng-template 
        [cdkPortalOutlet]="[nzPrefixRef, field] | template"
        (attached)="attached($event)"
      ></ng-template>
    </ng-template>

    <ng-template #suffixTemplateRef>
      <ng-template [cdkPortalOutlet]="nzSuffixRef"></ng-template>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})

export class StatisticField extends ShareFieldType implements OnInit, OnDestroy {

  get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzId () : string{
    return this.to.nzId || '';
  }

  get nzPrefix () : any {
    return this.to.nzPrefix || this.to.prefix || null
  }

  get nzPrefixRef () : any {
    return this.to.prefixRef || null
  }

  get nzSuffix () : any {
    return this.to.nzSuffix || this.to.suffix || null
  }

  get nzSuffixRef () : any {
    return this.template.get(this.to.suffixRef)
  }

  get nzTitle () : string | TemplateRef<void>	 {
    return this.to.nzTitle || this.to.title || '';
  }

  get nzValueStyle () : Object {
    return this.to.nzValueStyle || this.to.valueStyle || null;
  }

  get nzValueTemplate() : TemplateRef<{ $implicit: string | number }> {
    return this.to.nzValueTemplate || this.to.valueTemplate || null
  }

  get nzValue () : string | number {
    return this.formControl?.value || '';
  }

  get valuePipe (): pipeTokenType {
    return this.to.valuePipe || ''
  }

  get valuePipeArgs (): Array<any>{
    return this.to.valuePipeArgs || ''
  }

  private _destroy$ = new Subject<void>();

  ngModelChange ($event: Event) {
    if (this.to.change) {
      this.to.change(this.field, $event)
    }
  }

  nzOpenChange ($event: boolean) {
    if (this.to.nzOpenChange) {
      this.to.nzOpenChange(this.field, $event)
    }
  }

  nzScrollToBottom ($event: Event) {
    if (this.to.nzScrollToBottom) {
      this.to.nzScrollToBottom(this.field, $event)
    }
  }

  nzOnSearch (value: string) {
    if (this.to.nzOnSearch) {
      this.to.nzOnSearch(this.field, value)
    }
    this.cd.markForCheck();
  }

  nzFocus () {
    if (this.to.focus) {
      this.to.focus(this.field)
    }
  }
  
  nzBlur () {
    if (this.to.blur) {
      this.to.blur(this.field)
    }
  }

  attached(ref: CdkPortalOutletAttachedRef) {
    ref = ref as ComponentRef<any>;
    ref.instance.change$.subscribe((value: any) => {
      // this.onChange(this.data);
    })
  }

  ngOnInit() { }

  trackByFn(index: any, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy () {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
