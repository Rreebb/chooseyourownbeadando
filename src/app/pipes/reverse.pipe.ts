import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: false,
})
export class ReversePipe implements PipeTransform {
  transform(value: string /* , ...args: unknown[] */): string {
    let revstr: string = [...value].reverse().join('');
    revstr = revstr.toLowerCase();
    revstr = revstr.charAt(0).toUpperCase() + revstr.slice(1);
    return revstr;
  }
}
