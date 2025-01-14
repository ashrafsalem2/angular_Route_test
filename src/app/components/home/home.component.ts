import { Component } from '@angular/core';
import { InfoComponent } from "../info/info.component";

@Component({
  selector: 'app-home',
  imports: [InfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imagePath:string = '/images/avataaars.svg';
}
