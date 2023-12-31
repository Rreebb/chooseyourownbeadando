import { Component } from '@angular/core';
import { RouterService } from 'src/app/_services/router.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'choose-your-own-beadando';

  constructor(
    public routerService: RouterService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
