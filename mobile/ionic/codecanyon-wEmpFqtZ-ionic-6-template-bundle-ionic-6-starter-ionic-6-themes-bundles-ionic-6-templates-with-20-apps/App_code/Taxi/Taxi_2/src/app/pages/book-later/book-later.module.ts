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

import { BookLaterPageRoutingModule } from './book-later-routing.module';

import { BookLaterPage } from './book-later.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookLaterPageRoutingModule
  ],
  declarations: [BookLaterPage]
})
export class BookLaterPageModule {}
