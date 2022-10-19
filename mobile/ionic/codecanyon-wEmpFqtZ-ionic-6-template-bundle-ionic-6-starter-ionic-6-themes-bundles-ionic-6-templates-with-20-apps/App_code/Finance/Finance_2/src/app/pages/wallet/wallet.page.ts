/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  btn_id = 1;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCurrency() {
    this.router.navigate(['currency'])
  }
  goToSearch() {
    this.router.navigate(['search-modal'])
  }
  goToDeposit() {
    this.router.navigate(['deposit1'])
  }

  btnChange(val) {
    this.btn_id = val;
  }

}
