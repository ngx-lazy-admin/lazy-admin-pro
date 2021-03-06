
import { FocusMonitor } from '@angular/cdk/a11y';
import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core/util';
import { StepsOptionInterface } from './steps.type';

@Component({
  selector: 'nz-steps-item',
  exportAs: 'nzSliderItem',
  preserveWhitespaces: false,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NzStepsItemComponent),
      multi: true
    }
  ],
  template: `
    <nz-steps 
      [nzCurrent]="current"
      [nzProgressDot]="nzProgressDot"
      [nzStartIndex]="nzStartIndex"
      (nzIndexChange)="null">
      <ng-container *ngFor="let item of nzOptions; let i = index; trackBy: trackByFn">
        <nz-step 
          [nzTitle]="item.title"
          [nzDescription]="item.description"
          [nzIcon]="item?.icon"
          [nzSubtitle]="item?.subtitle"
          [nzDisabled]="item?.disabled"
          [nzPercentage]="item.percentage || null"
        >
        </nz-step>
      </ng-container>
    </nz-steps>
  `
})
export class NzStepsItemComponent implements ControlValueAccessor, OnInit, OnDestroy {
  static ngAcceptInputType_nzDisabled: BooleanInput;

  onChange: OnChangeType = () => {};
  onTouched: OnTouchedType = () => {};

  current: number = 0;

  @Input() @InputBoolean() nzDisabled: boolean = false;
  @Input() @InputBoolean() nzReverse: boolean = false;
  @Input() nzType: string = 'default';
  @Input() nzDirection: string = 'horizontal';
  @Input() nzLabelPlacement: string = 'horizontal';
  @Input() @InputBoolean() nzProgressDot: boolean | TemplateRef<{ $implicit: TemplateRef<void>, status: string, index: number }> = false;  
  @Input() nzSize: string = 'default';
  @Input() nzStatus: string = 'process';
  @Input() @InputNumber() nzStartIndex: number = 0;
  @Input() @InputBoolean() readonly: boolean = false;
  @Input() nzOptions: StepsOptionInterface[] = []
  
  IndexChange: boolean = false

  private _destroy$ = new Subject<void>();

  constructor(
    private elementRef: ElementRef,
    private focusMonitor: FocusMonitor,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.focusMonitor
      .monitor(this.elementRef, true)
      .pipe(takeUntil(this._destroy$))
      .subscribe(focusOrigin => {
        if (!focusOrigin) {
          Promise.resolve().then(() => this.onTouched());
        }
      });
  }

  onIndexChange(index: number): void {
    if (!this.readonly) {
      this.current = index;
      this.onChange(index);
    }
  }

  trackByFn(index: number, item: any) {
    return item.id ? item.id : index; // or item.id
  }

  ngOnDestroy(): void {
    this.focusMonitor.stopMonitoring(this.elementRef);
    this._destroy$.next();
    this._destroy$.complete();
  }

  writeValue(value: number): void {
    this.current = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: OnChangeType): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchedType): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.nzDisabled = disabled;
    this.cd.markForCheck();
  }
}

