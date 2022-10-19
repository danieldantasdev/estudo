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

import { PromoCodePageRoutingModule } from './promo-code-routing.module';

import { PromoCodePage } from './promo-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoCodePageRoutingModule
  ],
  declarations: [PromoCodePage]
})
export class PromoCodePageModule {}
