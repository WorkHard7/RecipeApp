import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  collapsed: boolean = true;

  constructor(private router: Router) {
  }

  navigateAndCollapse(route: string) {
    this.collapsed = true;
    this.router.navigate([route]);
  }
}
