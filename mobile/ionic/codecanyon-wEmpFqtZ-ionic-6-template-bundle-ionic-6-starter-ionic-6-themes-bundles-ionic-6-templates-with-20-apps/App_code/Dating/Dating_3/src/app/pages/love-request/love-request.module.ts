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

import { LoveRequestPageRoutingModule } from './love-request-routing.module';

import { LoveRequestPage } from './love-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoveRequestPageRoutingModule
  ],
  declarations: [LoveRequestPage]
})
export class LoveRequestPageModule {}
