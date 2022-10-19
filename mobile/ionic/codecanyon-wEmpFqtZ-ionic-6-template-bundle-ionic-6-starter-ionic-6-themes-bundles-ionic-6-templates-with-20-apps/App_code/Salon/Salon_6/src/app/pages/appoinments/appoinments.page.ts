/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CancelAppointmentPage } from '../cancel-appointment/cancel-appointment.page';

declare var google: any;

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.page.html',
  styleUrls: ['./appoinments.page.scss'],
})
export class AppoinmentsPage implements OnInit {

  tabs = 'upcoming';
  goToMapView = true

  @ViewChild('map', { static: false, read: ElementRef }) mapElement: ElementRef;
  selectTabs: any = 'about';
  map: any;

  constructor(
    private router: Router,
    private modalController: ModalController
  ) {
    setTimeout(() => {
      this.loadMap(21.782, 71.253);
    }, 1000);
  }

  ngOnInit() {
  }

  loadMap(lat, lng) {
    const latLng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      center: latLng,
      zoom: 15,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      overviewMapControl: false,
      mapTypeControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    console.log(this.mapElement);
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    const marker = new google.maps.Marker({
      map: this.map,
      position: latLng
    });
    const sunCircle = {
      strokeColor: '#49BEFC',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#49BEFC',
      fillOpacity: 0.35,
      map: this.map,
      center: latLng,
    };
    const circle = new google.maps.Circle(sunCircle);
    circle.bindTo('center', marker, 'position');
  }

  async onCancelApointment() {
    const modal = await this.modalController.create({
      component: CancelAppointmentPage,
      cssClass: 'custom_modal_center',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  onClick() {

  }

}
