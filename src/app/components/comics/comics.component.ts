import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ConfirmDialogComponent} from '../common/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';
import {AdminService} from '../../services/admin.service';
import {ComicsService} from '../../services/comics.service';
import {Comics} from '../../services/config-api';
import {FiltersService} from '../../services/filters.service';

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
    public comicsService: ComicsService,
    public filtersService: FiltersService
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
    this.filtersService.comicsFilters.filterAuteur = undefined;
    this.filtersService.comicsFilters.filterDessinateur = undefined;
    this.filtersService.comicsFilters.filterScenariste = undefined;
    this.filtersService.comicsFilters.filterGenre = undefined;
    this.filtersService.comicsFilters.filterSerie = undefined;
    this.initData();
  }

  public applySelectFilters(value: (string | number)): void {
    if (value !== '' && value !== undefined) {
      let newDataSource = this.comicsList;

      if (this.filtersService.comicsFilters.filterGenre !== undefined) {
        newDataSource = newDataSource.filter(
            comics => comics.genre === this.filtersService.comicsFilters.filterGenre);
      }
      if (this.filtersService.comicsFilters.filterSerie !== undefined) {
        newDataSource = newDataSource.filter(
            comics => comics.serie === this.filtersService.comicsFilters.filterSerie);
      }
      if (this.filtersService.comicsFilters.filterDessinateur !== undefined) {
        newDataSource = newDataSource.filter(
            comics => comics.id_dessinateur === this.filtersService.comicsFilters.filterDessinateur);
      }
      if (this.filtersService.comicsFilters.filterAuteur !== undefined) {
        newDataSource = newDataSource.filter(
            comics => comics.id_auteur === this.filtersService.comicsFilters.filterAuteur);
      }
      if (this.filtersService.comicsFilters.filterScenariste !== undefined) {
        newDataSource = newDataSource.filter(
            comics => comics.id_scenariste === this.filtersService.comicsFilters.filterScenariste);
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
    this.dataSource = new MatTableDataSource<Comics>(data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator.firstPage();
  }

  private initData(): void {
    this.comicsService.getAllComics().subscribe(data => {
      this.comicsList = data.response;
      this.initDataSource(data.response);
    });
  }
}

