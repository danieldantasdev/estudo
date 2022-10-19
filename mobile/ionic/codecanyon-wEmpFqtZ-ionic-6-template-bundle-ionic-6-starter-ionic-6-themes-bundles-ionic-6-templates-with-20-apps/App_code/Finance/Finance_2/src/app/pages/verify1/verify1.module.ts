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

import { Verify1PageRoutingModule } from './verify1-routing.module';

import { Verify1Page } from './verify1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Verify1PageRoutingModule
  ],
  declarations: [Verify1Page]
})
export class Verify1PageModule {}
