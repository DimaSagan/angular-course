import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleTransform',
  standalone: true
})
export class TitleTransformPipe implements PipeTransform {

  transform(title: string | undefined): string {
    let transformedTitle:string = ''
    if (title) {
      transformedTitle = title.replaceAll('_', ' ')
      
    }
    return transformedTitle;
  }

}
