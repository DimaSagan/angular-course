import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeFormat',
  standalone: true
})
export class TimeFormatPipe implements PipeTransform {

  transform(value: number): string {
    if (value === null) {
      return ''
    }
    const hour = Math.floor(value / 60).toString()
    const min = (value % 60).toString().padStart(2,'0')
    const time = `${hour}h ${min}m`
    return time
  }

}
