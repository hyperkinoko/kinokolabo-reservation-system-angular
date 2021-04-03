import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datetimeJp'
})
export class DatetimeJpPipe implements PipeTransform {

  transform(value: number): string {
    moment.locale('ja');
    return moment(value).format('YYYY/M/D H:mm');
  }
}
