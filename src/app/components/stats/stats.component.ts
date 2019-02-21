import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  public nbBandesDessinees = 1;
  public nbGenres;
  public nbSeries;
  public nbCreateurs;
  public nbScenaristes;
  public nbDessinateurs;
  public nbMaisonsEditions;
  public nbPremieresEditions;
  public nbReditions;

  constructor() { }

  ngOnInit() {
  }

}
