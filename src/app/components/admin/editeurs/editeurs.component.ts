import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editeurs',
  templateUrl: './editeurs.component.html',
  styleUrls: ['./editeurs.component.less']
})
export class EditeursComponent implements OnInit {

  private title = 'Editeurs';
  private componentName = 'maisonEditions';

  constructor() { }

  ngOnInit() {
  }

}
