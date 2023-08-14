import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Lang {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-task3-b',
  templateUrl: './task3-b.component.html',
  styleUrls: ['./task3-b.component.less'],
})
export class Task3BComponent {
  constructor(private translate: TranslateService) {
    let language = localStorage.getItem('selected_language');
    if (language) {
      this.translate.use(language);
    }
  }

  sel_lang = localStorage.getItem('selected_language') ?? 'en';

  useLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('selected_language', this.sel_lang);
  }

  onLangChange(o: any) {
    this.useLanguage(o.value);
  }

  languages: Lang[] = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Spanish' },
    { value: 'hu', viewValue: 'Hungarian' },
  ];
}
