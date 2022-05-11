import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powertox'
})
export class PowertoxPipe implements PipeTransform {

  transform(base: number,expo:number=1): unknown {
    return Math.pow(base,expo);
  }

}
