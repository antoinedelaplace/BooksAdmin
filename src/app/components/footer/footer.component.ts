import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public creator = 'Antoine DELAPLACE';
  public author = 'Guy FRANCOIS';
  public version = '1.0';

  constructor() { }

  ngOnInit() {
  }

}
