import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { PagenotfoundComponent } from './components/pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/pages/home/home.component';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagenotfoundComponent,
    HomeComponent,
    ListFilmsComponent,
    DetailFilmsComponent,
    ListPeoplesComponent,
    DetailPeoplesComponent,
    ListPlanetsComponent,
    DetailPlanetsComponent,
    ListSpeciesComponent,
    DetailSpeciesComponent,
    ListStarshipsComponent,
    DetailStarshipsComponent,
    ListVehinclesComponent,
    DetailVehinclesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
