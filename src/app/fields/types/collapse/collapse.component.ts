import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';

@Component({
  selector: 'div[collapse-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ant-form-item-required:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun, sans-serif;
        line-height: 1;
        content: "*";
      }
    `
  ],
  template: `
    <nz-collapse>
      <ng-container *ngFor="let field of field.fieldGroup; let i = index; trackBy: trackByFn">
        <nz-collapse-panel
          [nzHeader]="field?.templateOptions?.name"
          [nzActive]="field?.templateOptions?.active"
          [nzDisabled]="field?.templateOptions?.disabled"
        >
          <formly-field [field]="field"></formly-field>
        </nz-collapse-panel>
      </ng-container>
    </nz-collapse>
  `
})

export class CollapseField extends FieldArrayType implements OnDestroy {

	get nzType(): 'default' | 'navigation'{
		return this.to.nzType || 'default';
	}

	get nzDirection(): 'vertical' | 'horizontal' {
		return this.to.nzDirection || 'horizontal';
  }

  get nzLabelPlacement() : 'vertical' | 'horizontal' {
		return this.to.nzBordered || 'horizontal';
  }

  get nzProgressDot() : boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }> {
		return this.to.nzColumn || false;
  }


  get nzSize() : 'small' | 'default' {
		return this.to.nzSize || 'default';
  }

  get nzStatus() : 'wait' | 'process' | 'finish' | 'error' {
		return this.to.nzStatus || 'process';
  }

  get nzStartIndex(): number {
    return this.to.nzStartIndex || 0
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  nzIndexChange ($event: number) {
    if (this.to.nzIndexChange) {
      this.to.nzIndexChange($event)
    }
  }

  ngOnDestroy() {
    if (this.field && this.field.fieldGroup) {
      this.field.fieldGroup.map((item, index) => {
        super.remove(index)
      });
    }
  }
}
