import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface ConfirmDialogData {
  title: string;
  message: string;
  elementName: string;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.less']
})
export class ConfirmDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData,
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
  ) {
    if (this.data.title === undefined) {
      data.title = 'Suppression de ';
    }
    if (this.data.message === undefined) {
      data.message = 'Êtes-vous sur de vouloir supprimer l\'élément ?';
    }
  }

  public closeDialog(): void {
    this.dialogRef.close({
      confirm: true
    });
  }

}
