import { Component, OnChanges, OnInit, ChangeDetectionStrategy, TemplateRef, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
	selector: 'div[rate-field]',
	templateUrl: './rate.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
})
export class RateField extends FieldType {

	get control() : FormControl {
		return this.formControl as FormControl
	}

	get nzAllowClear (): boolean {
		return this.to.nzAllowClear || this.to.allowClear || false;
	}

	get nzAllowHalf (): boolean {
		return this.to.nzAllowHalf || this.to.allowHalf || false;
	}

	get nzAutoFocus(): boolean {
		return this.to.nzAutoFocus || this.to.autoFocus || false;
	}

	get nzCharacter(): TemplateRef<void> {
		return this.to.nzCharacter || null;
	}

	get nzCount (): number {
		return this.to.nzCount || 5;
	}

	get nzDisabled(): boolean {
		return this.to.nzDisabled || false;
	}

	get nzTooltips(): string[] {
		return this.to.nzTooltips || this.to.tooltips || []
	}

	get text (): string [] {
		return this.to.text || ''
	}

	ngModelChange ($event: Event) {
		if (this.to.change) {
			this.to.change(this.field, $event)
		}
	}

	nzOnBlur ($event: Event) {
		if (this.to.blur) {
			this.to.blur(this.field, $event)
		}
	}

	nzOnFocus ($event: Event) {
		if (this.to.focus) {
			this.to.focus(this.field, $event)
		}
	}

	nzOnHoverChange ($event: number) {
		if (this.to.onHoverChange) {
			this.to.onHoverChange(this.field, $event)
		}
	}

	nzOnKeyDown ($event: Event) {
		if (this.to.onKeyDown) {
			this.to.onKeyDown(this.field, $event)
		}
	}
}
