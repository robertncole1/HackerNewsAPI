import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class FilterPipe implements PipeTransform {

 
 public transform(value: any[], filterText: string) {

    return filterText.length > 1 ? value.filter(x=> x.title.toLowerCase().includes(filterText.toLowerCase())): value
  }
}
