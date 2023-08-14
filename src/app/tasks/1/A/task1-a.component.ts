import { Component } from '@angular/core';

@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.less'],
})
export class Task1AComponent {
  images: string[];
  clickCount: number = 0;
  bgc: string = '';

  constructor() {
    this.images = [
      'https://ocdn.eu/pulscms/MDA_/ec766a948e26cda043ef762ce44718bf.png',
      'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cs%C3%B3v%C3%A1nyos.JPG',
      'https://3.bp.blogspot.com/-SBLQ9iW8QJ4/WZmGlBs5hzI/AAAAAAAAMME/mXMl-DgP2NAaQ3TKRX3-iICol39CtDkFACEwYBhgL/s1600/Kanada%2B30.JPG',
    ];
  }

  onClick(): void {
    this.clickCount++;
    if (this.clickCount >= 5) {
      this.clickCount = 5;
      this.bgc = 'green';
    }
  }
}
