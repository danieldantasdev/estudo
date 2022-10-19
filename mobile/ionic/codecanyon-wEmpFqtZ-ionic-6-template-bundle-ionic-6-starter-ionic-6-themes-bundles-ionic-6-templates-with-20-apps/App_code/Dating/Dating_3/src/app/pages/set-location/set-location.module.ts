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

import { SetLocationPageRoutingModule } from './set-location-routing.module';

import { SetLocationPage } from './set-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetLocationPageRoutingModule
  ],
  declarations: [SetLocationPage]
})
export class SetLocationPageModule {}
