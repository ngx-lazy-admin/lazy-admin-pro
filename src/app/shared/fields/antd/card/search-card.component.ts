import { Component, OnDestroy, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { NzBreakpointEnum } from 'ng-zorro-antd/core/services';
import { delNullProperty } from 'src/app/utils';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[card-field]',
  template: `
  <nz-card 
    [nzBodyStyle]="nzBodyStyle"
    [nzTitle]="nzTitle" 
    [nzType]="nzType" 
    [nzExtra]="extraFields ? extraTemplate : ''"
    [nzBorderless]="nzBorderless">
    <div [class]="nzBodyClass" [style]="nzBodyStyle">
      <ng-container *ngFor="let item of field.fieldGroup; let i = index; trackBy: trackByFn">
        <formly-field [field]="item" [class.d-none]="i > 3 && !isCollapse"></formly-field>
      </ng-container>

      <div class="col-12 text-end">
        <nz-form-item>
          <nz-form-control> 
            <button class="me-2" nz-button [nzType]="'primary'" (click)="submit()">搜索</button>
            <button class="me-2" nz-button (click)="resetForm()">重置</button>
            <a (click)="toggleCollapse()">
              {{ isCollapse ? '收起' : '展开' }}
              <i nz-icon [nzType]="isCollapse ? 'down' : 'up'"></i>
            </a>
          </nz-form-control>
        </nz-form-item>
      </div>
    </div>
  </nz-card>


  <ng-template #extraTemplate>
    <ng-container *ngIf="extraFields">
      <formly-form [fields]="extraFields"></formly-form>
    </ng-container>
  </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .ant-form-item-required:before {
        display: inline-block;
        margin-right: 4px;
        color: #ff4d4f;
        font-size: 14px;
        font-family: SimSun,sans-serif;
        line-height: 1;
        content: "*";
      }
    `
  ]
})

export class SearchCardField extends ShareFieldType  implements OnDestroy {

  get nzActions(): Array<TemplateRef<void>> {
		return this.to.nzActions || this.to.actions || '';
	}

  get nzBodyStyle(): { [key: string]: string } {
		return this.to.nzBodyStyle || this.to.bodyStyle || '';
	}

  get nzBodyClass (): string {
    return this.to.nzBodyClass || this.to.bodyClass || ''
  }

  get nzBorderless(): boolean {
		return this.to.nzBorderless || this.to.borderless || false;
	}

	get nzCover(): TemplateRef<void> {
		return this.to.nzCover || this.to.cover || '';
	}

  get nzExtra(): string|TemplateRef<void> {
		return this.to.nzExtra || this.to.extra || '';
	}

  get nzHoverable(): boolean {
		return this.to.nzHoverable || this.to.hoverable || false;
	}

  get nzLoading(): boolean {
		return this.to.nzLoading || this.to.loading || false;
	}

  get nzTitle(): string|TemplateRef<void> {
		return this.to.nzTitle || this.to.title || '';
	}

  get nzType(): 'inner' {
		return this.to.nzType || this.to.type || '';
	}

  get nzSize(): 'default'|'small' {
		return this.to.nzSize || this.to.size || 'default';
	}

  get nzBordered() : boolean {
		return this.to.nzBordered || false;
  }

  get nzColumn() : number | { [key in NzBreakpointEnum]: number } {
		return this.to.nzColumn || null;
  }

  get nzColon() : boolean {
		return this.to.nzColon || false;
  }

  get extraFields(): FormlyFieldConfig[] {
    return this.to.extraFields ? this.to.extraFields(this.field) : null
  }

  get matchRouter(): boolean {
    return this.to.matchRouter || false;
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  isCollapse = true;


  toggleCollapse(): void {
    this.isCollapse = !this.isCollapse;
  }

  resetForm(): void {
    console.log('reset')
    this.formControl.reset();
  }

  submit (): void {
    if (this.matchRouter) {
      const params = JSON.parse(JSON.stringify(this.formControl.value))
      delNullProperty(params)
      this.router.navigate([window.location.pathname], { queryParams: params });
    }
  }

  ngOnDestroy() {}

  onClick($event: any) {
    if (this.to.click) {
      this.to.click(this.field, $event)
    }
  }
}
