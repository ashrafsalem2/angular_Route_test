import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';
import { NavScrollDirective } from '../../directives/nav-scroll.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NavScrollDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
