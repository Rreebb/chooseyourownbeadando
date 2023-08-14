import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from 'src/app/navigator/navigator.component';
import { PageRoutes } from 'src/app/_constants/page-routes';
import { SummaryComponent } from 'src/app/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: PageRoutes.task,
    pathMatch: 'full',
  },
  {
    path: PageRoutes.summary,
    component: SummaryComponent,
  },
  {
    path: `${PageRoutes.task}/:index/:task`,
    component: NavigatorComponent,
    pathMatch: 'full',
  },
  {
    path: `${PageRoutes.task}/:index`,
    component: NavigatorComponent,
    pathMatch: 'full',
  },
  {
    path: PageRoutes.task,
    component: NavigatorComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: PageRoutes.task,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
