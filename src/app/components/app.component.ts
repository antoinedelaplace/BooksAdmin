import { Component } from '@angular/core';
import {RouterNavItem} from './sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  public navList: RouterNavItem[];

  constructor() {
    this.navList = [
      { name: 'BDs', routerLink: '/comics' },
      { name: 'Auteurs', routerLink: 'admin/auteurs' },
      { name: 'Dessinateurs', routerLink: 'admin/dessinateurs' },
      { name: 'Editeurs', routerLink: 'admin/editeurs' },
      { name: 'Genres', routerLink: 'admin/genres' },
      { name: 'Scenaristes', routerLink: 'admin/scenaristes' },
      { name: 'Series', routerLink: 'admin/series' },
      { name: 'Statistiques', routerLink: 'stats' },
    ];
  }
}
