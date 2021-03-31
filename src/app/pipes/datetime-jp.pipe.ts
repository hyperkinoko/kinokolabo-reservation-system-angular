import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeJp'
})
export class DatetimeJpPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
