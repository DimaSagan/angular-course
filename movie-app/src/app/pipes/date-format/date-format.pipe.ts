import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(date: string): string {
    if (date) {
      const formated = date.match(/^\d{4}/)
      if (formated) {
        return formated[0]
      }
    }
    return '';
  }
}
