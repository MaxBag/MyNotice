import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(prop: any): any {

    const date = new Date(prop);
    let month = '' + date.getMonth();
    let hour = '' + date.getHours();

    if (+month < 10) {
      month = `0${+month + 1}`;
    }

    if (+hour < 10) {
      hour = `0${hour}`;
    }

    return `${date.getDate()}/${month}/${date.getFullYear()} ${hour}:${date.getMinutes()}`;
  }

}
