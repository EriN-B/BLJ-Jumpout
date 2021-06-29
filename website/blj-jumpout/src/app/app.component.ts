import { Component } from '@angular/core';
import { MenuItems } from "./types/menu-items";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'blj-jumpout';

  menuItems: MenuItems[] = [
    {
      label: 'Home',
      icon: 'home',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: true,
      link: '/home'
    },
    {
      label: 'Overview',
      icon: 'layers',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false,
      link: '/overview'
    }
  ];
}
