import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilterPipe implements PipeTransform {

  transform(items: any, start: Date): any {
    start.toString().length == 0 ? start = new Date("1995-12-25T11:30:00.000Z") : start;
    // @ts-ignore
    return items.filter(x=>{return new Date(x.expiration_date) >= new Date(start)});
  }

}
