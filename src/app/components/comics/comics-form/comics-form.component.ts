import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../services/admin.service';
import * as moment from 'moment';
import {ComicsService} from '../../../services/comics.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {Comics} from 'src/app/services/config-api';

@Component({
  selector: 'app-comics-forms',
  templateUrl: './comics-form.component.html',
  styleUrls: ['./comics-form.component.less']
})
export class ComicsFormComponent implements OnInit {

  public title = 'Création';
  public comicsFormGroup: FormGroup;
  public isCreation = true;
  private comicsId: string;
  public readonly selectsComponents = {
    genres: [],
    series: [],
    auteurs: [],
    dessinateurs: [],
    scenaristes: [],
    maisonEditions: []
  };

  constructor(
      public adminService: AdminService,
      public router: Router,
      public comicsService: ComicsService,
      private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.initFormGroup();
    this.subscribeRouteParams();
    this.initSelects();
  }

  private subscribeRouteParams(): void {
    this.route.paramMap.subscribe(params => {
      this.comicsId = params.get('id');
      if (this.comicsId) {
        this.title = 'Edition';
        this.comicsService.getComics(this.comicsId).subscribe(response => {
          this.setComicsValues(response.response[0]);
          this.isCreation = false;
        });
      }
    });
  }

  private initSelects(): void {
    Object.keys(this.selectsComponents).forEach(component => {
      this.adminService.getElements(component).subscribe(data => {
        this.selectsComponents[component] = data.response;
      });
    });
  }

  private getFormattedDate(dateField: string) {
    return moment(this.comicsFormGroup.get(dateField).value).format('YYYY-MM-DD') !== 'Invalid date'
        ? moment(this.comicsFormGroup.get(dateField).value).format('YYYY-MM-DD')
        : '';
  }

  public save(): void {
    const formValues = {
      ...this.comicsFormGroup.value,
      dateSortieEditionOriginale: this.getFormattedDate('dateSortieEditionOriginale'),
      dateImpressionOriginale: this.getFormattedDate('dateImpressionOriginale'),
      dateSortieEditionReedition: this.getFormattedDate('dateSortieEditionReedition'),
      dateImpressionReedition: this.getFormattedDate('dateImpressionReedition')
    };
    if (this.isCreation) {
      this.comicsService.insertElement(formValues).subscribe(response => {
        this.router.navigate(['comics']);
      });
    } else {
      formValues.id = this.comicsId;
      formValues.dateDebutPret = this.getFormattedDate('dateDebutPret');
      formValues.dateFinPret = this.getFormattedDate('dateFinPret');
      this.comicsService.editElement(formValues).subscribe(response => {
        this.router.navigate(['comics']);
      });
    }
  }

  private initFormGroup(): void {
    this.comicsFormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      comments: new FormControl(''),
      genre: new FormControl(''),
      serie: new FormControl(''),
      auteur: new FormControl(''),
      dessinateur: new FormControl(''),
      scenariste: new FormControl(''),
      maisonEditionOriginale: new FormControl(''),
      dateSortieEditionOriginale: new FormControl({value: '', disabled: true}),
      dedicaceOriginale: new FormControl(''),
      dateImpressionOriginale: new FormControl({value: '', disabled: true}),
      isbnOriginale: new FormControl(''),
      maisonEditionReedition: new FormControl(''),
      dateSortieEditionReedition: new FormControl({value: '', disabled: true}),
      dedicaceReedition: new FormControl(''),
      dateImpressionReedition: new FormControl({value: '', disabled: true}),
      isbnReedition: new FormControl(''),
    });
  }

  private setComicsValues(comics: Comics): void {
    this.comicsFormGroup.get('name').patchValue(comics.name);
    this.comicsFormGroup.get('comments').patchValue(comics.comments);
    this.comicsFormGroup.get('genre').patchValue(comics.genre);
    this.comicsFormGroup.get('serie').patchValue(comics.serie);
    this.comicsFormGroup.get('auteur').patchValue(comics.id_auteur);
    this.comicsFormGroup.get('dessinateur').patchValue(comics.id_dessinateur);
    this.comicsFormGroup.get('scenariste').patchValue(comics.id_scenariste);
    this.comicsFormGroup.get('maisonEditionOriginale').patchValue(comics.maisonEditionOriginale);
    this.comicsFormGroup.get('dateSortieEditionOriginale').patchValue(comics.dateSortieEditionOriginale);
    this.comicsFormGroup.get('dateImpressionOriginale').patchValue(comics.dateImpressionOriginale);
    this.comicsFormGroup.get('dedicaceOriginale').patchValue(comics.dedicaceOriginale);
    this.comicsFormGroup.get('isbnOriginale').patchValue(comics.isbnOriginale);
    this.comicsFormGroup.get('maisonEditionReedition').patchValue(comics.maisonEditionReedition);
    this.comicsFormGroup.get('dateSortieEditionReedition').patchValue(comics.dateSortieEditionReedition);
    this.comicsFormGroup.get('dateImpressionReedition').patchValue(comics.dateImpressionReedition);
    this.comicsFormGroup.get('dedicaceReedition').patchValue(comics.dedicaceReedition);
    this.comicsFormGroup.get('isbnReedition').patchValue(comics.isbnReedition);
    this.comicsFormGroup.addControl('nomPret', new FormControl(comics.nomPret));
    this.comicsFormGroup.addControl('dateDebutPret', new FormControl({value: comics.dateDebutPret, disabled: true}));
    this.comicsFormGroup.addControl('dateFinPret', new FormControl({value: comics.dateFinPret, disabled: true}));
  }
}
