/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cancel-appointment',
  templateUrl: './cancel-appointment.page.html',
  styleUrls: ['./cancel-appointment.page.scss'],
})
export class CancelAppointmentPage implements OnInit {

  constructor(
    private navctr : NavController,
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  goBackAppointments(){
    this.modalController.dismiss();
  }

  onClick(){
    
  }

}
