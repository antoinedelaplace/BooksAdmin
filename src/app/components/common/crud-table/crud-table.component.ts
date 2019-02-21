import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {AddEditDialogComponent} from '../add-edit-dialog/add-edit-dialog.component';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.less']
})
export class CrudTableComponent implements OnInit {

  public crudDataSource: MatTableDataSource<Test>;
  public displayedColumns: string[];

  @Input() title: string;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'description', 'actions'];
    this.crudDataSource = new MatTableDataSource<Test>([
      {
        id: '1',
        name: 'test 1',
        description: 'description test 1'
      },
      {
        id: '2',
        name: 'test 2',
        description: 'description test 2'
      },
      {
        id: '3',
        name: 'test 3',
        description: 'description test 3'
      },
      {
        id: '4',
        name: 'test 4',
        description: 'description test 4'
      },
      {
        id: '5',
        name: 'test 5',
        description: 'description test 5'
      },
      {
        id: '6',
        name: 'test 6',
        description: 'description test 6'
      }
    ]);
    this.crudDataSource.paginator = this.paginator;
    this.crudDataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.crudDataSource.filter = filterValue.trim().toLowerCase();
     this.crudDataSource.paginator.firstPage();
  }

  public addElement(): void {
    const addDialog = this.dialog.open(AddEditDialogComponent, {
      data: {},
      minWidth: 400
    });

    addDialog.afterClosed()
      .subscribe(newElement => {
        if (newElement) {
          this.crudDataSource.data.push({
            id: '5',
            name: newElement.name,
            description: newElement.description
          });
          this.crudDataSource._updateChangeSubscription();
        }
      });
  }

  public editElement(element: Test): void {
    const editDialog = this.dialog.open(AddEditDialogComponent, {
      data: {
        name: element.name,
        description: element.description
      },
      minWidth: 400
    });

    editDialog.afterClosed()
      .subscribe(editedElement => {
        if (editedElement) {
          element.name = editedElement.name;
          element.description = editedElement.description;
        }
      });
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
          const index = this.crudDataSource.data.map(item => item.id).indexOf(element.id);
          this.crudDataSource.data.splice(index, 1);
          this.crudDataSource._updateChangeSubscription();
          this.crudDataSource.paginator.firstPage();
        }
      });
  }
}

export interface Test {
  id: string;
  name: string;
  description: string;
}
