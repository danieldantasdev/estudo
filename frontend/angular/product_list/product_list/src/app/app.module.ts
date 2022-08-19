import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './components/shared/product-list/product-list.component';
import { ProductDetailComponent } from './components/shared/product-detail/product-detail.component';
import { TopBarComponent } from './components/shared/top-bar/top-bar.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductDetailComponent, TopBarComponent, PageNotFoundComponent, HomeComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
