import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term: string): any[] {
    if (!term || term.trim() === '') {
      return items;
    }
    console.log(items)
    return items.filter(item => item.value.toLowerCase().includes(term.toLowerCase()));
  }
}
