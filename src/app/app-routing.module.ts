import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuteursComponent } from './components/admin/auteurs/auteurs.component';
import { DessinateursComponent } from './components/admin/dessinateurs/dessinateurs.component';
import { EditeursComponent } from './components/admin/editeurs/editeurs.component';
import { GenresComponent } from './components/admin/genres/genres.component';
import { ScenaristesComponent } from './components/admin/scenaristes/scenaristes.component';
import { SeriesComponent } from './components/admin/series/series.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { StatsComponent } from './components/stats/stats.component';
import { ComicsComponent } from './components/comics/comics.component';
import { ComicsFormComponent } from './components/comics/comics-form/comics-form.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'comics/form', component: ComicsFormComponent },
  { path: 'admin/auteurs', component: AuteursComponent },
  { path: 'admin/dessinateurs', component: DessinateursComponent },
  { path: 'admin/editeurs', component: EditeursComponent },
  { path: 'admin/genres', component: GenresComponent },
  { path: 'admin/scenaristes', component: ScenaristesComponent },
  { path: 'admin/series', component: SeriesComponent },
  { path: 'stats', component: StatsComponent },
  { path: '**', redirectTo: 'accueil'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
