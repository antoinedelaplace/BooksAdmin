import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatSort, MatDialog, MatSnackBar} from '@angular/material';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';
import {AddEditDialogComponent} from '../add-edit-dialog/add-edit-dialog.component';
import {AdminService} from '../../../services/admin.service';
import {AdminData} from '../../../services/config-api';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.less']
})
export class CrudTableComponent implements OnInit {

  public crudDataSource: MatTableDataSource<AdminData>;
  public displayedColumns: string[];

  @Input() title: string;
  @Input() componentName: string;
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private adminService: AdminService
  ) {
  }

  ngOnInit() {
    this.displayedColumns = ['name', 'description', 'actions'];
    this.initDatas();
  }

  public applyFilter(filterValue: string) {
    this.crudDataSource.filter = filterValue.trim().toLowerCase();
     this.crudDataSource.paginator.firstPage();
  }

  public addElement(): void {
    const addDialog = this.dialog.open(AddEditDialogComponent, {
      data: {
          forbiddenNames: this.crudDataSource.data.map(field => field.name)
      },
      minWidth: 400
    });

    addDialog.afterClosed()
      .subscribe(newElement => {
        if (newElement) {
          this.adminService.insertElement(this.componentName, newElement).subscribe( response => {
              this.crudDataSource.data.push({
                id: response.response.insertId,
                name: newElement.name,
                description: newElement.description
              });
              this.crudDataSource._updateChangeSubscription();
              this.crudDataSource.paginator.lastPage();
          });
        }
      });
  }

  public editElement(element: AdminData): void {
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

  public deleteElement(element: AdminData): void {
    const removeDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        elementName: element.name
      },
      minWidth: 400
    });

    removeDialog.afterClosed()
      .subscribe(removeResponse => {
        if (removeResponse && removeResponse.confirm) {
            this.adminService.removeElement(this.componentName, element).subscribe(response => {
                console.log(response);
                if (response.status === 200) {
                    const index = this.crudDataSource.data.map(item => item.id).indexOf(element.id);
                    this.crudDataSource.data.splice(index, 1);
                    this.crudDataSource._updateChangeSubscription();
                    this.crudDataSource.paginator.firstPage();
                } else {
                    this.snackBar.open(response.error, 'Fermer', {
                        duration: 10000,
                    });
                }
            });
        }
      });
  }

  private initDatas(): void {
    this.adminService.getElements(this.componentName).subscribe(data => {
      console.log(data.response);
      this.crudDataSource = new MatTableDataSource<AdminData>(data.response);
      this.crudDataSource.paginator = this.paginator;
      this.crudDataSource.sort = this.sort;
    });
  }
}
