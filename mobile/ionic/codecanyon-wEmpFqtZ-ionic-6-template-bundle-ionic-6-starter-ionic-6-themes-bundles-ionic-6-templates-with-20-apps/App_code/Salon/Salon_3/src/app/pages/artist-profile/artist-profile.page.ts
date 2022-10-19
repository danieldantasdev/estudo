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
import { ModalController, NavController } from '@ionic/angular';
import { SpecialistAppointmentPage } from '../specialist-appointment/specialist-appointment.page';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.page.html',
  styleUrls: ['./artist-profile.page.scss'],
})
export class ArtistProfilePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onClick() {

  }

  onWork() {
    this.router.navigate(['artist-work']);
  }
  onBack() {
    this.NavCtrl.back();
  }
  onFollow() {
    this.router.navigate(['following']);
  }

  async onService() {
    const modal = await this.modalController.create({
      component: SpecialistAppointmentPage,
      // cssClass: 'make_modal',
      showBackdrop: true,
      componentProps: { value: 123 }
    });

    await modal.present();

  }
}
