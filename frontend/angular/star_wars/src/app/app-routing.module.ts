import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { AuthGuard } from './guards/auth.guard';

import { ListFilmsComponent } from './components/pages/films/list-films/list-films.component';
import { DetailFilmsComponent } from './components/pages/films/detail-films/detail-films.component';
import { ListPeoplesComponent } from './components/pages/peoples/list-peoples/list-peoples.component';
import { DetailPeoplesComponent } from './components/pages/peoples/detail-peoples/detail-peoples.component';
import { ListPlanetsComponent } from './components/pages/planets/list-planets/list-planets.component';
import { DetailPlanetsComponent } from './components/pages/planets/detail-planets/detail-planets.component';
import { ListSpeciesComponent } from './components/pages/species/list-species/list-species.component';
import { DetailSpeciesComponent } from './components/pages/species/detail-species/detail-species.component';
import { ListStarshipsComponent } from './components/pages/starships/list-starships/list-starships.component';
import { DetailStarshipsComponent } from './components/pages/starships/detail-starships/detail-starships.component';
import { ListVehinclesComponent } from './components/pages/vehincles/list-vehincles/list-vehincles.component';
import { DetailVehinclesComponent } from './components/pages/vehincles/detail-vehincles/detail-vehincles.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'films', component: ListFilmsComponent, canActivate: [AuthGuard] },
  {
    path: 'films/:id',
    component: DetailFilmsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'peoples',
    component: ListPeoplesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'peoples/:id',
    component: DetailPeoplesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'planets',
    component: ListPlanetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'planets/:id',
    component: DetailPlanetsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'species',
    component: ListSpeciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'species/:id',
    component: DetailSpeciesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'starships',
    component: ListStarshipsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'starships/:id',
    component: DetailStarshipsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vehincles',
    component: ListVehinclesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'vehincles/:id',
    component: DetailVehinclesComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
