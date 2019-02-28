import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auteurs',
  templateUrl: './auteurs.component.html',
  styleUrls: ['./auteurs.component.less']
})
export class AuteursComponent implements OnInit {

  private title = 'Auteurs';
  private componentName = 'auteurs';

  constructor() { }

  ngOnInit() {
  }

}
