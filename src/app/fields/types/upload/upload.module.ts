import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { UploadField } from './upload.component'
import { NzUploadItemComponent } from './upload-item.component';


@NgModule({
  declarations: [
    UploadField,
    NzUploadItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzUploadModule,
    NzButtonModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'nz-upload',
          component: UploadField,
        }
      ],
    }),
  ],
})
export class UploadFieldModule {}