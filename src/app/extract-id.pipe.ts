import { Pipe, PipeTransform } from '@angular/core';
import _ from 'lodash';

@Pipe({
  name: 'extractId'
})
export class ExtractIdPipe implements PipeTransform {

  transform(value: string): number {
    const arr: string[] = value.split('/');
    arr.pop();
    return Number(_.last(arr));
  }
}
