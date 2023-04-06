import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
    /**
     * it uses the DatePipe's transform method to convert the given date object into a string in the desired format. 
     * Then it returns this formatted string as the output of the pipe.
     *  
     */
  transform(value: Date): string {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(value, 'dd/MM/yyyy');
  }
}