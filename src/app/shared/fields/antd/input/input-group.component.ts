import { 
	Component, 
	ChangeDetectionStrategy,
	Input, 
	Self, 
	Optional, 
	ViewEncapsulation
} from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';
import { FieldType,  } from '@ngx-formly/core';

import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';

@Component({
	selector: 'div[input-group-field]',
	changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
	host: {
		'display': 'contents',
	},
	template: `
		<input
			nz-input
			[formControl]="control"
			[formlyAttributes]="field"
			[nzSize]="nzSize"
			[nzBorderless]="nzBorderless"
			[type]="type"
		/>
	`
})
export class InputGroupField extends FieldType {

	@Input()
	@InputBoolean()
	get nzBorderless(): boolean {
		return this.to.nzBorderless || false
	}

	@Input()
	get nzSize(): NzSizeLDSType {
		return this.to.nzSize || 'default'
	}

	get control() : FormControl {
		return this.formControl as FormControl
  }

	get type(): string {
		return this.to.type || 'text'
	}
}
