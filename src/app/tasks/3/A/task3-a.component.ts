import { Component } from '@angular/core';
import { ReversePipe } from 'src/app/pipes/reverse.pipe';

@Component({
  selector: 'app-task3-a',
  templateUrl: './task3-a.component.html',
  styleUrls: ['./task3-a.component.less']
})
export class Task3AComponent {

  constructor() { }
  tomb = ['Malenia', 'Mohg', 'Morgott'];


}
