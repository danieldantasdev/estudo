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

import { ConfirmTransactionPageRoutingModule } from './confirm-transaction-routing.module';

import { ConfirmTransactionPage } from './confirm-transaction.page';
import { NgOtpInputModule } from 'ng-otp-input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmTransactionPageRoutingModule,
    NgOtpInputModule
  ],
  declarations: [ConfirmTransactionPage]
})
export class ConfirmTransactionPageModule { }
