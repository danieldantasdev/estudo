/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { EmergencyContactsPage } from './pages/emergency-contacts/emergency-contacts.page';
import { BookLaterPage } from './pages/book-later/book-later.page';
import { PaymentMethodPage } from './pages/payment-method/payment-method.page';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ModalController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(private router: Router, private modalCtrl: ModalController, private menuCtrl: MenuController) { }

  close() {
    this.menuCtrl.close();
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  async openPayment() {
    const modal = await this.modalCtrl.create({
      component: PaymentMethodPage,
      cssClass: 'payment_modal',
      mode: 'md'
    });
    modal.present();
  }

  async openBookLater() {
    const modal = await this.modalCtrl.create({
      component: BookLaterPage,
      mode: 'md'
    });
    modal.present();
  }

  goToMyTrips() {
    this.router.navigate(['/my-trips']);
  }

  goToRateCard() {
    this.router.navigate(['/rate-card']);
  }

  goToNews() {
    this.router.navigate(['/news-offers']);
  }

  async openContacts() {
    const modal = await this.modalCtrl.create({
      component: EmergencyContactsPage,
      mode: 'md'
    });
    modal.present();
  }
}
