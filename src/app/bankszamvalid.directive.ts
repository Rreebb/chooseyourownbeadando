import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[bankszamvalid]',
})
export class BankszamvalidDirective {
  constructor(private er: ElementRef) {}

  @HostListener('input', ['$event']) public onKeyup(
    event: KeyboardEvent
  ): void {
    let ez = this.er.nativeElement;
    if (ez.validity.valid) {
      ez.style.backgroundColor = 'green';
      ez.value = ez.value.replace(' ', '-');
    } else {
      ez.style.backgroundColor = '';
    }
  }
}
