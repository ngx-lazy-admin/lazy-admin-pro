import { Component, ElementRef, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FieldType,  } from '@ngx-formly/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'div[echart-field]',
  template: `

  `,
  encapsulation: ViewEncapsulation.None
})
export class G2Field extends FieldType {

  constructor(
    private elementRef: ElementRef,
    private http: HttpClient,
  ) {
    super();
  }

  get control() : FormControl {
		return this.formControl as FormControl
  }

  ngModelChange ($event: any) {
    console.log($event)
  }
}

