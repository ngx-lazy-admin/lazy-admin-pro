import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';

import { NzButtonShape,  NzButtonType, NzButtonSize} from 'ng-zorro-antd/button';
import { ShareFieldType } from '../share-field.type';

@Component({
  selector: 'div[button-field]',
  template: `
    <ng-container *ngIf="nzType !== 'link'">
      <button 
        nz-button
        [nzGhost]="nzGhost"
        [nzLoading]="nzLoading"
        [nzShape]="nzShape"
        [nzSize]="nzSize"
        [nzType]="nzType"
        [disabled]="disabled"
        [nzDanger]="nzDanger"
        nz-popconfirm
        [nzPopconfirmTitle]="nzPopconfirmTitle"
        [nzPopconfirmPlacement]="nzPopconfirmPlacement"
        type="submit"
        [nzBlock]="nzBlock"
        (click)="click()"
        (nzOnCancel)="cancel()"
      >
        <i *ngIf="icon" nz-icon [nzType]="icon"></i>
        <ng-container *ngIf="text">{{ text }}</ng-container>
      </button>
  </ng-container>

  <ng-container *ngIf="nzType === 'link'">
    <a 
      nz-button
      [nzGhost]="nzGhost"
      [nzLoading]="nzLoading"
      [nzShape]="nzShape"
      [nzSize]="nzSize"
      [nzType]="nzType"
      [disabled]="disabled"
      [nzDanger]="nzDanger"
      nz-popconfirm
      [nzPopconfirmTitle]="nzPopconfirmTitle"
      [nzPopconfirmPlacement]="nzPopconfirmPlacement"
      type="submit"
      [nzBlock]="nzBlock"
      (click)="click()"
      (nzOnCancel)="cancel()"
    >
      <i *ngIf="icon" nz-icon [nzType]="icon"></i>
      <ng-container *ngIf="text">{{ text }}</ng-container>
    </a>
  </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,


})
export class ButtonField extends ShareFieldType {

  get disabled(): boolean {
		return this.to.disabled || false;
	}

	get nzGhost(): boolean {
		return this.to.nzGhost || this.to.ghost || false;
	}

	get control() : FormControl {
		return this.formControl as FormControl;
  }

  get nzShape() : NzButtonShape {
		return this.to.nzShape || this.to.shape || '';
  }

  get nzLoading(): boolean {
    return this.to.nzLoading || this.to.loading || false;
  }

  get nzSize() : NzButtonSize {
		return this.to.nzSize || this.to.size || 'default';
  }

  get nzType() : NzButtonType {
		return this.to.nzType || this.to.type || '';
  }

  get nzBlock() : boolean {
		return this.to.nzBlock || this.to.block || false;
  }

	get nzDanger(): boolean {
		return this.to.nzDanger || this.to.danger || false;
	}

  get text(): string {
    return this.to.text || ''
  }

  get icon(): string {
    return this.to.icon || ''
  }

  get nzPopconfirmPlacement(): string {
    return this.to.nzPopconfirmPlacement || 'bottom'
  }

  get nzPopconfirmTitle(): string {
    return this.to.nzPopconfirmTitle || null
  }

  private _destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
