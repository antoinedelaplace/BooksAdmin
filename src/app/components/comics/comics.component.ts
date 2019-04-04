import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ConfirmDialogComponent} from '../common/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {ComicsService} from '../../services/comics.service';
import {Comics} from '../../services/config-api';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.less']
})
export class ComicsComponent implements OnInit {

  public dataSource: MatTableDataSource<Comics>;
  public comicsList: Comics[];
  public displayedColumns: string[];
  public filterName = '';
  public filterGenre: string;
  public filterSerie: string;
  public filterAuteur: number;
  public filterDessinateur: number;
  public filterScenariste: number;

  public readonly filtersComponents = {
    genres: [],
    series: [],
    auteurs: [],
    dessinateurs: [],
    scenaristes: [],
  };

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public router: Router,
    public adminService: AdminService,
    public comicsService: ComicsService
  ) { }

  ngOnInit() {
    this.displayedColumns = ['name', 'genre', 'serie', 'actions'];
    this.initFilters();
    this.initData();
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  public addElement(): void {
    this.router.navigate(['comics/form']);
  }

  public editElement(element: Comics): void {
    this.router.navigate(['comics/form', {id: element.id}]);
  }

  public deleteElement(element: Comics): void {
    const removeDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        elementName: element.name
      },
      minWidth: 400
    });

    removeDialog.afterClosed()
      .subscribe(removeResponse => {
        if (removeResponse && removeResponse.confirm) {
          this.comicsService.removeElement(element).subscribe(response => {
            const index = this.comicsList.map(item => item.id).indexOf(element.id);
            this.comicsList.splice(index, 1);
            this.initDataSource(this.comicsList);
          });
        }
      });
  }


  public resetFilters(): void {
    this.filterName = '';
    this.filterAuteur = undefined;
    this.filterDessinateur = undefined;
    this.filterScenariste = undefined;
    this.filterGenre = undefined;
    this.filterSerie = undefined;
    this.initData();
  }

  public applySelectFilters(value: (string | number)): void {
    if (value !== '' && value !== undefined) {
      let newDataSource = this.comicsList;

      if (this.filterGenre !== undefined) {
        newDataSource = newDataSource.filter(comics => comics.genre === this.filterGenre);
      }
      if (this.filterSerie !== undefined) {
        newDataSource = newDataSource.filter(comics => comics.serie === this.filterSerie);
      }
      if (this.filterDessinateur !== undefined) {
        newDataSource = newDataSource.filter(comics => comics.id_dessinateur === this.filterDessinateur);
      }
      if (this.filterAuteur !== undefined) {
        newDataSource = newDataSource.filter(comics => comics.id_auteur === this.filterAuteur);
      }
      if (this.filterScenariste !== undefined) {
        newDataSource = newDataSource.filter(comics => comics.id_scenariste === this.filterScenariste);
      }
      this.initDataSource(newDataSource);
    }
  }

  private initFilters(): void {
    Object.keys(this.filtersComponents).forEach(component => {
      this.adminService.getElements(component).subscribe(data => {
        this.filtersComponents[component] = data.response;
      });
    });
  }

  private initDataSource(data: Comics[]): void {
    this.comicsList = data;
    this.dataSource = new MatTableDataSource<Comics>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator.firstPage();
  }

  private initData(): void {
    this.comicsService.getAllComics().subscribe(data => {
      this.initDataSource(data.response);
    });
  }
}

