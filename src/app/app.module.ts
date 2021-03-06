import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {MaterialModule} from './app-material.module';
import { AppRoutingModule } from './app-routing.module';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

import { AppComponent } from './components/app.component';
import { AuteursComponent } from './components/admin/auteurs/auteurs.component';
import { DessinateursComponent } from './components/admin/dessinateurs/dessinateurs.component';
import { EditeursComponent } from './components/admin/editeurs/editeurs.component';
import { GenresComponent } from './components/admin/genres/genres.component';
import { ScenaristesComponent } from './components/admin/scenaristes/scenaristes.component';
import { SeriesComponent } from './components/admin/series/series.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HeaderComponent } from './components/header/header.component';
import { StatsComponent } from './components/stats/stats.component';
import { ComicsComponent } from './components/comics/comics.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { CrudTableComponent } from './components/common/crud-table/crud-table.component';
import { ConfirmDialogComponent } from './components/common/confirm-dialog/confirm-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEditDialogComponent } from './components/common/add-edit-dialog/add-edit-dialog.component';
import { ComicsFormComponent } from './components/comics/comics-form/comics-form.component';

import {StatsService} from './services/stats.service';
import {AdminService} from './services/admin.service';
import {ComicsService} from './services/comics.service';
import {FiltersService} from './services/filters.service';


export const MyDateFormat = {
  parse: {
    dateInput: 'input',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AuteursComponent,
    DessinateursComponent,
    EditeursComponent,
    GenresComponent,
    ScenaristesComponent,
    SeriesComponent,
    AccueilComponent,
    HeaderComponent,
    StatsComponent,
    ComicsComponent,
    SidenavComponent,
    CrudTableComponent,
    ConfirmDialogComponent,
    AddEditDialogComponent,
    ComicsFormComponent
  ],
  entryComponents: [
    ConfirmDialogComponent,
    AddEditDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMomentDateModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {provide: MAT_DATE_FORMATS, useValue: MyDateFormat},
    StatsService,
    AdminService,
    ComicsService,
    FiltersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
