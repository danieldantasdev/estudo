/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { UtilService } from './../../services/util.service';
import { SearchLocationPage } from './../search-location/search-location.page';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
import { Geolocation, PermissionStatus } from '@capacitor/geolocation';

declare var google: any;

@Component({
  selector: 'app-my-location',
  templateUrl: './my-location.page.html',
  styleUrls: ['./my-location.page.scss'],
})
export class MyLocationPage implements OnInit {

  @ViewChild('map', { static: true }) mapEle: ElementRef;

  map: any;
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

  constructor(private modalCtrl: ModalController, private menuCtrl: MenuController,
    private alertCtrl: AlertController, private nativeSettings: OpenNativeSettings, public util: UtilService) {
    // this.getLocation();
    setTimeout(() => {
      this.loadmap(21.5304119, 71.8251657, this.mapEle);
    }, 1000);
  }

  ngOnInit() {
  }

  async goToSerchLocation() {
    const modal = await this.modalCtrl.create({
      component: SearchLocationPage
    });
    modal.present();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  // getLocation() {
  //     Geolocation.checkPermissions().then((data) => {
  //         console.log(data);
  //         if (data && data.location && data.location === 'granted') {
  //             console.log('permission granted');
  //             this.accessLocation();
  //         } else {
  //             console.log('request sent');
  //             Geolocation.requestPermissions().then((data: PermissionStatus) => {
  //               console.log('request output', data);
  //               if (data && data.location === 'granted') {
  //                 this.accessLocation();
  //               } else {
  //                 // present alert
  //                 this.presentAlertConfirm();
  //                 console.log('eror-> in request');
  //                 this.util.errorToast(this.util.translate('Error While Fetching Location!'));
  //               }
  //             }).catch(error => {
  //               console.log('eror-> in request', error);
  //               this.accessLocation();
  //             });
  //       }
  //     }).catch((error) => {
  //         console.log('eror->', error);
  //         this.util.errorToast(this.util.translate('Error While Fetching Location!'));
  //     });
  // }

  // accessLocation() {
  //     this.util.show(this.util.translate('Fetching Location'));
  //     Geolocation.getCurrentPosition({ maximumAge: 9000, timeout: 20000, enableHighAccuracy: true }).then((data: GeolocationPosition) => {
  //       this.util.hide();
  //         console.log('location data', data);
  //         if (data && data.coords) {
  //             this.lat = data.coords.latitude;
  //             this.lng = data.coords.longitude;
  //             this.gotLatLng = true;
  //             this.loadmap(data.coords.latitude, data.coords.longitude, this.mapEle);
  //             this.getAddress(this.lat, this.lng);
  //         }
  //     }, error => {
  //         this.util.hide();
  //         console.log('eror->', error);
  //         this.util.errorToast(this.util.translate('Error While Fetching Location!'));
  //     }).catch(error => {
  //         this.util.hide();
  //         console.log('eror->', error);
  //         this.util.errorToast(this.util.translate('Error While Fetching Location!'));
  //     });
  // }

  loadmap(lat, lng, mapElement) {
    const location = new google.maps.LatLng(lat, lng);
    const style = [
      {
        featureType: 'all',
        elementType: 'all',
        stylers: [
          { saturation: -100 }
        ]
      }
    ];

    const mapOptions = {
      zoom: 15,
      scaleControl: false,
      streetViewControl: false,
      zoomControl: false,
      overviewMapControl: false,
      center: location,
      mapTypeControl: false,
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'initappz']
      }
    };
    this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
    const mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
    this.map.mapTypes.set('initappz', mapType);
    this.map.setMapTypeId('initappz');
    this.addMarker(location);
  }

  addMarker(location) {
    console.log('location =>', location);
    const icons = {
      url: 'assets/imgs/green_mark.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
    };
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      icon: icons,
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    google.maps.event.addListener(this.marker, 'dragend', () => {
      console.log(this.marker);
      this.getDragAddress(this.marker);
    });
  }

  getDragAddress(event) {
    const geocoder = new google.maps.Geocoder();
    const location = new google.maps.LatLng(event.position.lat(), event.position.lng());
    geocoder.geocode({ 'location': location }, (results, status) => {
      console.log(results);
      this.address = results[0].formatted_address;
      this.lat = event.position.lat();
      this.lng = event.position.lng();
    });
  }

  getAddress(lat, lng) {
    const geocoder = new google.maps.Geocoder();
    const location = new google.maps.LatLng(lat, lng);
    geocoder.geocode({ 'location': location }, (results, status) => {
      console.log(results);
      this.address = results[0].formatted_address;
      this.lat = lat;
      this.lng = lng;
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Location permission is denied',
      message: 'Do you want to change location permission from app settings?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Confirm Okay');
            this.nativeSettings.open('locations').then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            });
          }
        }
      ]
    });
    await alert.present();
  }

}
