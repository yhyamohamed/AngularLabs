import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './_models/product.model';

@Pipe({
  name: 'arraySplice',
  pure: false,
})
export class ArraySplicePipe implements PipeTransform {
  transform(elements: Product[], needle: string): Product[] {
    if (needle) {
      return elements.filter((ele) =>
        ele.name.toLowerCase().includes(needle.toLowerCase())
      );
    }
    return elements;
  }
}
