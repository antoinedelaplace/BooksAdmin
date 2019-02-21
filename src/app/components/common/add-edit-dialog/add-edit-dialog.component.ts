import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import {FormControl, FormGroup} from '@angular/forms';

export interface AddEditData {
  title: string;
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-add-edit-dialog',
  templateUrl: './add-edit-dialog.component.html',
  styleUrls: ['./add-edit-dialog.component.less']
})
export class AddEditDialogComponent {
  public nameDescriptionFormGroup: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AddEditData,
    public dialogRef: MatDialogRef<AddEditDialogComponent>,
  ) {
    this.nameDescriptionFormGroup = new FormGroup({
      name: new FormControl(this.data && this.data.name ? this.data.name : ''),
      description: new FormControl(this.data && this.data.description ? this.data.description : ''),
    });
    if (this.data && !this.data.title) {
      data.title = data.name ? data.name : 'Création';
    }
  }

  public save(): void {
    this.dialogRef.close(this.nameDescriptionFormGroup.value);
  }
}
