/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltersPageRoutingModule } from './filters-routing.module';

import { FiltersPage } from './filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltersPageRoutingModule
  ],
  declarations: [FiltersPage]
})
export class FiltersPageModule {}
