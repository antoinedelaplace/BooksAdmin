import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ConfirmDialogComponent} from '../common/confirm-dialog/confirm-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.less']
})
export class ComicsComponent implements OnInit {

  public dataSource: MatTableDataSource<Test>;
  public displayedColumns: string[];
  public listGenres: string[];

  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public router: Router
  ) {
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'kind', 'serie', 'creator', 'actions'];
    this.dataSource = new MatTableDataSource<Test>([
      {
        id: '1',
        name: 'astérix',
        kind: 'genre 1',
        serie: 'astérix',
        creator: 'x'
      },
      {
        id: '2',
        name: 'astérix',
        kind: 'genre 2',
        serie: 'astérix',
        creator: 'x'
      },
      {
        id: '3',
        name: 'lucky luke',
        kind: 'genre 3',
        serie: 'astérix',
        creator: 'x'
      },
      {
        id: '4',
        name: 'lucky luke',
        kind: 'genre 1',
        serie: 'astérix',
        creator: 'x'
      },
      {
        id: '5',
        name: 'alix',
        kind: 'genre 3',
        serie: 'astérix',
        creator: 'x'
      },
      {
        id: '6',
        name: 'alix',
        kind: 'genre 6',
        serie: 'astérix',
        creator: 'x'
      }
    ]);
    this.listGenres = ['1', '2', '3', '4', '5'];
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  public addElement(): void {
    this.router.navigate(['comics/form']);
  }

  public editElement(element: Test): void {
    this.router.navigate(['comics/form', {id: element.id}]);
  }

  public deleteElement(element: Test): void {
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
}

export interface Test {
  id: string;
  name: string;
  kind: string;
  serie: string;
  creator: string;
}

