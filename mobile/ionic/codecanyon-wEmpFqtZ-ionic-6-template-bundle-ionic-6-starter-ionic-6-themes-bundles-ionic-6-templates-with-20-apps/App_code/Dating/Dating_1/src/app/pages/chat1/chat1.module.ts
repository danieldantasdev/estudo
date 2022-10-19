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

import { Chat1PageRoutingModule } from './chat1-routing.module';

import { Chat1Page } from './chat1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Chat1PageRoutingModule
  ],
  declarations: [Chat1Page]
})
export class Chat1PageModule {}
