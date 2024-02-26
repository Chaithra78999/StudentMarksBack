import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { StudentMarksComponent } from './studentmarks/student-marks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  //imports: [RouterOutlet],
  imports:[StudentMarksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
