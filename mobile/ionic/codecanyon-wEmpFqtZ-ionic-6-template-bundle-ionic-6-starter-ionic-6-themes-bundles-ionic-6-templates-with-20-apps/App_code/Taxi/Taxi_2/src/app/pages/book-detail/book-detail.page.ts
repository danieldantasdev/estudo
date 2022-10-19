/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DriverDetailPage } from './../driver-detail/driver-detail.page';
import { FareDetailPage } from './../fare-detail/fare-detail.page';
import { PromoCodePage } from './../promo-code/promo-code.page';
import { PaymentMethodPage } from './../payment-method/payment-method.page';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
declare var google: any;

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.page.html',
  styleUrls: ['./book-detail.page.scss'],
})
export class BookDetailPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  userLat: any = 21.772800;
  userLng: any = 72.153557;


  marker: any;
  lat: any;
  lng: any;
  address: any = '';

  gotLatLng: boolean = false;

  carType = [
    {
      img1: 'car-active.png',
      img2: 'car-deactive.png',
      name: 'Car'
    },
    {
      img1: 'budget-active.png',
      img2: 'budget-deactive.png',
      name: 'Budget'
    },
    {
      img1: 'tuk-tuk-active.png',
      img2: 'tuk-tuk-deactive.png',
      name: 'Tuk Tuk'
    },
    {
      img1: 'city-active.png',
      img2: 'city-deactive.png',
      name: 'City'
    },
    {
      img1: 'van-active.png',
      img2: 'van-deactive.png',
      name: 'van'
    }
  ];
  type = 1;
  height;

  constructor(private plt: Platform, private modalCtrl: ModalController) {
    this.plt.ready().then(() => {
      console.log(this.plt.height());
      this.height = this.plt.height();
    });
    setTimeout(() => {
      this.loadMap(this.userLat, this.userLng, 21.534630, 71.827484);
    }, 1000);
  }

  ngOnInit() {
  }

  async openPayment() {
    const modal = await this.modalCtrl.create({
      component: PaymentMethodPage,
      cssClass: 'payment_modal',
      mode: 'md'
    });
    modal.present();
  }

  async openPromoCode() {
    const modal = await this.modalCtrl.create({
      component: PromoCodePage,
      cssClass: 'promo_modal',
      mode: 'md'
    });
    modal.present();
  }

  async openFareDetail() {
    const modal = await this.modalCtrl.create({
      component: FareDetailPage,
      cssClass: 'fare_modal',
      mode: 'md'
    });
    modal.present();
  }

  async openDriverDetail() {
    const modal = await this.modalCtrl.create({
      component: DriverDetailPage,
      cssClass: 'driver_modal'
    });
    modal.present();
  }

  loadMap(latOri, lngOri, latDest, lngDest) {
    const directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    const bounds = new google.maps.LatLngBounds;

    const origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    const destinationA = { lat: latDest, lng: lngDest };

    const maps = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 100
    });

    const custPos = new google.maps.LatLng(latOri, lngOri);
    const restPos = new google.maps.LatLng(latDest, lngDest);

    const logo = {
      url: 'assets/imgs/green_mark.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };
    const marker = new google.maps.Marker({
      map: maps,
      position: custPos,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    const markerCust = new google.maps.Marker({
      map: maps,
      position: restPos,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    marker.setMap(maps);
    markerCust.setMap(maps);

    directionsDisplay.setMap(maps);
    // directionsDisplay.setOptions({ suppressMarkers: true });
    directionsDisplay.setOptions({
      polylineOptions: {
        strokeWeight: 4,
        strokeOpacity: 1,
        strokeColor: '#ff384c'
      },
      suppressMarkers: true
    });
    const geocoder = new google.maps.Geocoder;

    const service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false
    }, function (response, status) {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        const originList = response.originAddresses;
        const destinationList = response.destinationAddresses;
        const showGeocodedAddressOnMap = function (asDestination) {
          return function (results, status) {
            if (status === 'OK') {
              maps.fitBounds(bounds.extend(results[0].geometry.location));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING'
        }, function (response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });

        for (let i = 0; i < originList.length; i++) {
          const results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (let j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });
    // this.interval = setInterval(() => {
    //   this.getOrder(marker, maps);
    // }, 12000);
  }

}
