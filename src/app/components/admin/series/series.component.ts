import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.less']
})
export class SeriesComponent implements OnInit {

  private title = 'Series';
  private componentName = 'series';

  constructor() { }

  ngOnInit() {
  }

}
