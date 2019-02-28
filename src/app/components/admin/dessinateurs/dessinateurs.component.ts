import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dessinateurs',
  templateUrl: './dessinateurs.component.html',
  styleUrls: ['./dessinateurs.component.less']
})
export class DessinateursComponent implements OnInit {

  private title = 'Dessinateurs';
  private componentName = 'dessinateurs';

  constructor() { }

  ngOnInit() {
  }

}
