/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectServicePage } from '../select-service/select-service.page';

@Component({
  selector: 'app-specialist-appointment',
  templateUrl: './specialist-appointment.page.html',
  styleUrls: ['./specialist-appointment.page.scss'],
})
export class SpecialistAppointmentPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.modalController.dismiss();
  }

  onClick() {

  }

  async onAdd() {
    const modal = await this.modalController.create({
      component: SelectServicePage,
      // cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
