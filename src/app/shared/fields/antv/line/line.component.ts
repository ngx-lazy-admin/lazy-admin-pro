import { Component, ChangeDetectionStrategy, ViewEncapsulation, TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';
import { LineOptions } from '@antv/g2plot';

@Component({
  selector: 'div[antv-area]',
  template: `
    <antv-line-item
      [formControl]="control"
      [formlyAttributes]="field"
      [config]="config"
    >
    </antv-line-item>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class AntvLineField extends FieldType {

  get control() : FormControl {
		return this.formControl as FormControl
  }

  get disabled(): boolean {
		return this.to.disabled || false;
	}

  get config(): LineOptions {
    return this.to.config
  }

  ngAfterViewInit() {

  }

  ngOnDestroy(): void {
    
  }
}
