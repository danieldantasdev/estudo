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
import { PackagePage } from '../package/package.page';
import { SelectServicePage } from '../select-service/select-service.page';
import { SharePage } from '../share/share.page';

declare var google: any;

@Component({
  selector: 'app-salon-details',
  templateUrl: './salon-details.page.html',
  styleUrls: ['./salon-details.page.scss'],
})
export class SalonDetailsPage implements OnInit {
  @ViewChild('map', { static: false, read: ElementRef }) mapElement: ElementRef;
  selectTabs: any = 'about';
  map: any;

  constructor(
    private modalController: ModalController,
    private router: Router
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

  async goToSelectService() {
    const modal = await this.modalController.create({
      component: SelectServicePage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  goToSalonSpecialist() {
    this.router.navigate(['salon-specialist']);
  }

  goToBookAppointment() {
    this.router.navigate(['book-appointment']);
  }

  goToCall() {
    this.router.navigate(['call']);
  }

  async goToShare() {
    const modal = await this.modalController.create({
      component: SharePage,
      cssClass: 'custom_bottom_modal',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  async goToPackage() {
    const modal = await this.modalController.create({
      component: PackagePage,
      cssClass: 'custom_modal_bottom',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  onClick() {

  }

}
