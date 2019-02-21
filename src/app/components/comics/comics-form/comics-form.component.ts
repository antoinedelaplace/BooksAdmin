import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-comics-forms',
  templateUrl: './comics-form.component.html',
  styleUrls: ['./comics-form.component.less']
})
export class ComicsFormComponent implements OnInit {

  public title = 'Création';
  public comicsFormGroup: FormGroup;
  public listGenres: string[];

  constructor() { }

  ngOnInit() {
    this.comicsFormGroup = new FormGroup({
      name: new FormControl(''),
      comments: new FormControl('')
    });
    this.listGenres = ['1', '2', '3', '4', '5'];
  }

  public save(): void { }
}
