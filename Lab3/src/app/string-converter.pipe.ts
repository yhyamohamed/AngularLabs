import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConverter'
})
export class StringConverterPipe implements PipeTransform {

  transform(word: string): string {
    return word? word.replace(/-/g, " ") : word;
  }

}
