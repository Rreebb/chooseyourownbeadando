import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-task2-b',
  templateUrl: './task2-b.component.html',
  styleUrls: ['./task2-b.component.less'],
})
export class Task2BComponent {
  minDate: Date;

  constructor(private date:DatePipe) {
    this.minDate = new Date();

  }

  swform = new FormGroup({
    swname: new FormControl('', Validators.required),
    actkey: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}'),
    ]),
    validuntil: new FormControl(new Date(), Validators.required),
  });

  get swname() {
    return this.swform.get('swname');
  }
  get actkey() {
    return this.swform.get('actkey');
  }
  get validuntil() {
    return this.swform.get('validuntil');
    //return formatDate(this.validuntil!.value, 'yyyy. mm. dd.', 'hu-HU');
  }

  alert_submmission() {
    alert(
      'Név: ' +
        this.swname?.value +
        '\nKulcs: ' +
        this.actkey?.value +
        '\nÉrvényesség: ' +
        this.date.transform(this.validuntil?.value,'yyyy. MM. dd.')
    );
  }
}
