import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { WorkoutListComponent } from './workout-list/workout-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    WorkoutFormComponent,
    NgxPaginationModule
  ],
  bootstrap: [],
  declarations: [
    AppComponent,
    WorkoutFormComponent,
    WorkoutListComponent
  ],
})
export class AppModule { }
