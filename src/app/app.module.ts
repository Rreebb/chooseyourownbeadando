import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskSelectorComponent } from './task-selector/task-selector.component';
import { TaskComponent } from './task/task.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MarkdownModule } from 'ngx-markdown';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Task1AComponent } from './tasks/1/A/task1-a.component';
import { Task1BComponent } from './tasks/1/B/task1-b.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { SummaryComponent } from './summary/summary.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PreviewComponent } from './preview/preview.component';
import { Task2AComponent } from 'src/app/tasks/2/A/task2-a.component';
import { Task2BComponent } from 'src/app/tasks/2/B/task2-b.component';
import { Task3AComponent } from 'src/app/tasks/3/A/task3-a.component';
import { Task3BComponent } from 'src/app/tasks/3/B/task3-b.component';
import { Task4AComponent } from 'src/app/tasks/4/A/task4-a.component';
import { Task4BComponent } from 'src/app/tasks/4/B/task4-b.component';
import { Task5AComponent } from 'src/app/tasks/5/A/task5-a.component';
import { Task5BComponent } from 'src/app/tasks/5/B/task5-b.component';
import { ImageComponent } from './image/image.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TargyComponent } from './targy/targy.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { ReversePipe } from './pipes/reverse.pipe';
import { CommonModule, DatePipe } from '@angular/common';
import { BankszamvalidDirective } from './bankszamvalid.directive';
// import ngx-translate and the http loader
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { PersonComponent } from './person/person.component';

import {DragDropModule} from '@angular/cdk/drag-drop';

const materialModules = [
  LayoutModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatSelectModule,
  MatGridListModule,
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavigatorComponent,
    Task1AComponent,
    Task1BComponent,
    Task2AComponent,
    Task2BComponent,
    Task3AComponent,
    Task3BComponent,
    Task4AComponent,
    Task4BComponent,
    Task5AComponent,
    Task5BComponent,
    TaskSelectorComponent,
    SummaryComponent,
    PreviewComponent,
    ImageComponent,
    TargyComponent,
    ReversePipe,
    BankszamvalidDirective,
    PersonComponent,
  ],
  imports: [
    ...materialModules,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    RouterModule,
    ReactiveFormsModule,
    CommonModule,
    DragDropModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

// required for AOT (ahead of time) compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}