import {Component, OnInit} from '@angular/core';
import {StatsService} from '../../services/stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.less']
})
export class StatsComponent implements OnInit {

  public detailsStats;

  constructor(private statsService: StatsService) { }

  ngOnInit() {
    this.initDetailsStats();
    this.statsService.getAllStats().subscribe(stats => {
      this.detailsStats.forEach(stat => {
        stat.totalStats = stats.response[stat.key];
      });
    });
  }

  public fillCurrentStats(stat: DetailStats): void {
    switch (stat.name) {
      case 'genres':
        this.statsService.getGenresStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'series':
        this.statsService.getSeriesStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'reeditions':
        this.statsService.getReeditionsStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'editionsOriginales':
        this.statsService.getEditionsOriginalesStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'maisonEditions':
        this.statsService.getMaisonEditionsStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'dessinateurs':
        this.statsService.getDessinateursStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'scenaristes':
        this.statsService.getScenaristesStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
      case 'auteurs':
        this.statsService.getAuteursStats().subscribe( stats => {
          stat.stats = stats.response;
        });
        break;
    }
  }

  private initDetailsStats(): void {
    this.detailsStats = [
      {
        name: 'exemplaires',
        disabled: true,
        title: 'Exemplaires Bandes dessinées',
        key: 'nbBandesDessinees'
      },
      {
        name: 'titres',
        disabled: true,
        title: 'Titres de bandes dessinées',
        key: 'nbTitres'
      },
      {
        name: 'genres',
        disabled: false,
        title: 'Genres',
        key: 'nbGenres',
      },
      {
        name: 'series',
        disabled: false,
        title: 'Series',
        key: 'nbSeries',
      },
      {
        name: 'auteurs',
        disabled: false,
        title: 'Créateurs',
        key: 'nbCreateurs',
      },
      {
        name: 'scenaristes',
        disabled: false,
        title: 'Scenaristes',
        key: 'nbScenaristes',
      },
      {
        name: 'dessinateurs',
        disabled: false,
        title: 'Dessinateurs',
        key: 'nbDessinateurs',
      },
      {
        name: 'maisonEditions',
        disabled: false,
        title: 'Maisons d\'éditions',
        key: 'nbMaisonsEditions',
      },
      {
        name: 'editionsOriginales',
        disabled: false,
        title: 'Premières éditions',
        key: 'nbPremieresEditions',
      },
      {
        name: 'reeditions',
        disabled: false,
        title: 'Réeditions',
        key: 'nbReditions',
      }
    ];
  }

}

export interface DetailStats {
  name: string;
  disabled: boolean;
  title: string;
  key: string;
  stats: Stat[];
}

export interface Stat {
  nombre: string;
  name: string;
}
