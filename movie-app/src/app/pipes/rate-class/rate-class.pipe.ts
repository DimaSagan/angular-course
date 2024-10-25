import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rateClass',
  standalone: true
})
export class RateClassPipe implements PipeTransform {

  transform(rate: number): string {
    if (rate >= 8) {
      return 'hight-rating'
    } else if (rate >= 5) {
      return 'medium-rating'
    } else {
      return 'low-rating'
    }
  }

}
