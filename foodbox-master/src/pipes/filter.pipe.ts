import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.length==0 || filterString==''){

      return value
    }
  
  const products1 =[];
  for(const p of value){
    if(p['name']==filterString){
      products1.push(p)
    }
  }
  return products1;
}
}