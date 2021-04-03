import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeJp'
})
export class TimeJpPipe implements PipeTransform {

  transform(value: number): string {
    moment.locale('ja');
    return moment(value).format('LT');
  }

}
