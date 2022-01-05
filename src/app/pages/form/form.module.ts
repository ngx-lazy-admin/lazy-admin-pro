import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

import { IconsProviderModule } from '../../modules/icons-provider.module';
import { NgZorroAntdModule } from '../../modules/ng-zorro-antd.modules';
import { FieldTypeModule } from '../../fields/types';
import { FormFieldModule } from '../../fields/wrappers/form';


@NgModule({
  declarations: [
    FormComponent,
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    FormlyModule.forRoot(),
    FieldTypeModule,
    FormFieldModule,
  ]
})
export class FormModule { }
