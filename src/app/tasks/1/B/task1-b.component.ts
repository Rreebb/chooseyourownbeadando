import { Component } from '@angular/core';
import { Targy } from 'src/app/targy';

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.less'],
})
export class Task1BComponent {
  targyak: Targy[] = [
    {
      kepurl: '<img src="assets/images/mios/dogo.png" alt="" />',
      nev: 'perrito chiquitito',
      ertek: 234,
    },
    {
      kepurl: '<img src="assets/images/mios/dogo.png" alt="" />',
      nev: 'perra',
      ertek: 522,
    },
    {
      kepurl: '<img src="assets/images/mios/dogo.png" alt="" />',
      nev: 'perrito',
      ertek: 1000,
    },
  ];

  border_normal: string = '1px solid purple';
  border_chosen: string = '6px dotted red';

  border_style(i: number): string {
    return this.chosen_index === i ? this.border_chosen : this.border_normal;
  }

  choose(i:number) {
    if (i==this.chosen_index ) {
      delete this.chosen_index;
    } else {
      this.chosen_index = i;
    }
  }
  chosen_index?: number;

  constructor() {}
}
