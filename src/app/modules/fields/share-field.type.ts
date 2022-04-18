
import { HttpClient } from '@angular/common/http';
import { Directive, ChangeDetectorRef, NgZone, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldType, FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { NzButtonSize, NzButtonType } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FullScreenService } from 'src/app/services/menu/full-screen.service';

export type FieldActionFn = (field: FormlyFieldConfig, that?: any) => boolean;

export interface ActionTypeInterface {
  type: NzButtonType,
  text?: string | number | null ;
  value?: NzSafeAny | null;
  icon?: string,
  disabled?: boolean;
  hide?: boolean;
  popconfirmTitle?: string,
  popconfirmPlacement?: string,
  className?: string,
  options?: [],
  size?: NzButtonSize,
  click?: FieldActionFn,
  close: FieldActionFn,
  confirm?: FieldActionFn,
  cancel?: FieldActionFn
}


export const execEval = (code: string) => eval('(' + code + ')')

export const execFunc = (func: string | Function) => typeof(func) == 'string' ? execEval(func) : func

@Directive()
export abstract class ShareFieldType extends FieldType {
  constructor(
    // @Inject(DOCUMENT) public dom: any,
    public cd: ChangeDetectorRef,
    public http: HttpClient,
    public readonly zone: NgZone,
    public message: NzMessageService,
    public config: FormlyConfig,
    // private notification: NzNotificationService,
    public fullScreenService: FullScreenService,
    public elRef: ElementRef,
    public elementRef: ElementRef,

  ) {
    super();
  }
  
  // 通用事件处理
  click (action?: ActionTypeInterface) {
    this.zone.runOutsideAngular(() => {
      try{
        const func = typeof(action?.click) == 'string' 
          ? execEval(action?.click) : 
          (typeof(this.to?.click)=='string' ? execEval(this.to?.click) : null);

        func ? func(this.field, this) : null

        // if (this.to?.click) {
        //   const func = typeof(this.to?.click) == 'string' ? execEval(this.to?.click) : this.to?.click;
        //   func(this.field, this)
        // }
        this.cd.markForCheck();
      } catch (err){
        console.log(err)
      } finally {
        console.log('click finally')
      }
    });
  }

  // 通用事件处理
  change (action?: ActionTypeInterface) {
    this.zone.runOutsideAngular(() => {
      try{
        if (this.to?.change) {
          const func = typeof(this.to?.change) == 'string' ? execEval(this.to?.change) : this.to?.change;
          func(this.field, this)
        }
      } catch (err){
        console.log(err)
      } finally {
        console.log('change finally')
      }
    });
  }

  confirm (action?: ActionTypeInterface) {
    this.message.success('confirm')
    this.zone.runOutsideAngular(() => {
      if (action?.confirm) {
        action.confirm(this.field, this)
      } else if (this.to?.confirm) {
        this.to.confirm(this.field, this);
      }
    });
  }

  close (action?: ActionTypeInterface) {
    this.message.success('close')
    this.zone.runOutsideAngular(() => {
      if (action?.close) {
        action.close(this.field, this)
      } else if (this.to?.close) {
        this.to.close(this.field, this);
      }
    });
  }

  cancel (action?: ActionTypeInterface) {
    this.message.success('cancel')
    this.zone.runOutsideAngular(() => {
      if (action?.cancel) {
        action.cancel(this.field, this)
      } else if (this.to?.cancel) {
        this.to.cancel(this.field, this);
      }
    });
  }

  submit (form: FormGroup) {
    Object.values(form.controls).forEach(control => {
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  } 
}