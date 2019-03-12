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
  public displayedColumns: string[];

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
  ) {
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'genre', 'serie', 'actions'];
    this.initFilters();
    this.initDatas();
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
          const index = this.dataSource.data.map(item => item.id).indexOf(element.id);
          this.dataSource.data.splice(index, 1);
          this.dataSource._updateChangeSubscription();
          this.dataSource.paginator.firstPage();
        }
      });
  }

  private initFilters(): void {
    Object.keys(this.filtersComponents).forEach(component => {
      this.adminService.getElements(component).subscribe(data => {
        this.filtersComponents[component] = data.response;
      });
    });
  }

  private initDatas(): void {
    this.comicsService.getAllComics().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource<Comics>(data.response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}

