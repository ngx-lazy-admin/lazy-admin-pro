import {
  Component,
  OnDestroy,
  TemplateRef,
  ChangeDetectionStrategy,
  EventEmitter,
  ViewChild,
  ViewEncapsulation,
  ChangeDetectorRef,
  SimpleChanges,
 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldArrayType, FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { BooleanInput, NumberInput, NzSafeAny, NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TemplateService } from 'src/app/shared/template';
import { ActionTypeInterface, ShareFieldType } from '../share-field.type';
// import { TemplateService } from '../template.service';

export interface VirtualDataInterface {
  index: number;
  name: string;
  age: number;
  address: string;
}

// reference https://ant.design/components/table-cn/#Column
export interface ColumnsTypeInterface {
  label: string,
  value: string,
  title: string, // 列头显示文字（函数用法 3.10.0 后支持）
  key: string,
  templateRef: any,
  dataIndex: number | string // 列数据在数据项中对应的路径，支持通过数组查询嵌套路径
}

@Component({
  selector: 'div[simple-table-field]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  template: `
    <pro-table-item
      [formControl]="control"
      [formlyAttributes]="field"
      [columns]="columns"
      (ngModelChange)="change($event)"
    >
    </pro-table-item>
  `
})

export class ProTableField extends FieldType implements OnDestroy {

  @ViewChild('virtualTable', { static: false }) nzTableComponent?: NzTableComponent<VirtualDataInterface>;

  private destroy$ = new Subject();

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get nzData (): any[] {
    if (this.formControl.value instanceof Array) {
      return this.formControl.value || []
    } else {
      return []
    }
  }

  get nzPrefixRef () : any {
    return this.template.get(this.to.prefixRef, this.field)
  }

  get group (): any[] {
    if (this.field.fieldGroup instanceof Array) {
      return this.field.fieldGroup
    } else {
      return []
    }
  }

  get nzSelectedIndex(): number {
		return this.to.nzSelectedIndex || 0;
	}

  get nzShowPagination() : boolean {
    return this.to.nzShowPagination || this.to.showPagination || false;
  }

  get nzFrontPagination() : boolean {
    return this.to.nzFrontPagination || this.to.frontPagination || true;
  }

  get nzAnimated(): boolean  {
		return this.to.nzAnimated || false;
	}

  get nzTitle(): string | TemplateRef<void> {
    return this.to.title || this.to.nzTitle || ''
  }

  get nzWidth(): string {
    return '10%'
  }

  get nzBordered(): boolean {
    return this.to.nzBordered || this.to.bordered || false
  }

  get editor(): boolean {
    return this.to.editor || false
  }

  get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default';
	}

  get nzTabBarExtraContent(): string|TemplateRef<void> {
		return this.to.nzTabBarExtraContent || false;
	}

  get nzTabBarStyle():  { [key: string]: string } | null {
		return this.to.nzTabBarStyle || false;
	}

  get nzTabBarGutter():  number {
		return this.to.nzTabBarGutter || false;
	}

  get nzHideAll(): boolean {
		return this.to.nzHideAll || false;
	}

	get nzLinkRouter(): string|TemplateRef<void> {
		return this.to.nzLinkRouter || false;
	}

	get nzLinkExact(): string|TemplateRef<void> {
		return this.to.nzLinkExact || '';
  }

  get nzCanDeactivate() : boolean {
		return this.to.nzCanDeactivate || false;
  }

  get nzCentered() : boolean {
		return this.to.nzCentered || false;
  }

  get nzHideAdd(): boolean {
    return this.to.nzHideAdd || false;
  }

  get nzAddIcon(): string | TemplateRef<void> {
    return this.to.nzAddIcon || false;
  }

  get actinsOptions () : ActionTypeInterface[] {
    return this.to.actinsOptions || []
  }

  get columns () : ColumnsTypeInterface[] {
    return this.to.columns || [];  
  }

  constructor(
    private template: TemplateService
  ) {
    super()
  }

  getTemplate (column: any, data: any) {
    return null
  }

  editCache: { [key: string]: boolean } = {};

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes)
  }

  change ($event: any) {
    // console.log($event)
  }

  edit (field: FormlyFieldConfig) {
    if (field.id) {
      this.editCache[field.id] = true;
    }
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index;
  }

  pageIndexChange (index: number) {
    console.log(index)
  }

  pageSizeChange (pageSize: number) {
    console.log(pageSize)
  }

  currentPageDataChange (page: any) {
    // console.log(page)
  }

  ngAfterViewInit(): void {
    this.nzTableComponent?.cdkVirtualScrollViewport?.scrolledIndexChange
      .pipe(takeUntil(this.destroy$))
      .subscribe((data: number) => {
        console.log('scroll index to', data);
      });

    this.formControl?.valueChanges.subscribe(item => {
      console.log(item)
    })
  }

  ngOnDestroy() {
    // if (this.field && this.field.fieldGroup) {
    //   this.field.fieldGroup.map((item, index) => {
    //     super.remove(index)
    //   });
    // }
    this.destroy$.next();
    this.destroy$.complete();    
  }

  isString (str: any) {
    return str instanceof String;
  }

  nzSelectedIndexChange ($event: EventEmitter<number>) {
    if (this.to.nzSelectedIndexChange) {
      this.to.nzSelectedIndexChange($event)
    }
  } 

  nzAdd ($event: EventEmitter<{}>) {
    if (this.to.nzAdd) {
      this.to.nzAdd($event)
    }
  }

  nzClose ($event: EventEmitter<{ index: number }>) {
    if (this.to.nzClose) {
      this.to.nzClose($event)
    }
  }

  trackByIndex(_: number, data: VirtualDataInterface): number {
    return data.index;
  }
} 
