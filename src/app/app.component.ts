import { Component } from '@angular/core';
import { WorkoutFormComponent } from './workout-form/workout-form.component';
import { WorkoutListComponent } from './workout-list/workout-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WorkoutListComponent,WorkoutFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'health-tracker';
}
