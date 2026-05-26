import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})

export class TempraturePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return value + ' - transformed'
  }
}
