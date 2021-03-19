import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(products, value) {
    console.log(value);
    
    return products.filter((p) => {
      return p.name.includes(value);
    });
  }

}
