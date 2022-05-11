import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(base: number,expo:number=1): unknown {
    return Math.pow(base,expo);
  }

}
