import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent implements OnInit {

  @Input() listItems: RouterNavItem[];

  constructor() { }

  ngOnInit() {
  }

}

export interface RouterNavItem {
  name: string;
  routerLink: string;
}
