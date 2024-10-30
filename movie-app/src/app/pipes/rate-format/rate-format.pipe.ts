import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateFormat',
  standalone: true
})
export class RateFormatPipe implements PipeTransform {

  transform(value: number): unknown {
    return value.toFixed(1);
  }

}
