import { Pipe, PipeTransform } from '@angular/core';
import { watermark } from 'src/app/utils';

@Pipe({
  name: 'watermark',
  pure: true
})
export class WatermarkPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    watermark(value).subscribe(item => {
      console.log(item)
      return item
    })
  }
}
