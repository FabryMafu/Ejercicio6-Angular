import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from "./components/comp1/comp1.component";
import { Comp2Component } from "./components/comp2/comp2.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio6';
}
