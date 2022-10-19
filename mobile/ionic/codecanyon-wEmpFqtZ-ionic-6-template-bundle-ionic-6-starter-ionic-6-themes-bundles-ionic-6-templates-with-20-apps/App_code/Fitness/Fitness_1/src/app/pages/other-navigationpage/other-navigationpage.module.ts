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

import { OtherNavigationpagePageRoutingModule } from './other-navigationpage-routing.module';

import { OtherNavigationpagePage } from './other-navigationpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherNavigationpagePageRoutingModule
  ],
  declarations: [OtherNavigationpagePage]
})
export class OtherNavigationpagePageModule {}
