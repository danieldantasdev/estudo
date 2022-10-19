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
import { Geolocation } from '@capacitor/geolocation';
import { NavController } from '@ionic/angular';

declare var google: any;

@Component({
  selector: 'app-request-ride',
  templateUrl: './request-ride.page.html',
  styleUrls: ['./request-ride.page.scss'],
})
export class RequestRidePage implements OnInit {


  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;
  lat: any;
  lng: any;

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {
    this.getPosition();
  }

  async getPosition() {
    setTimeout(() => {
      this.loadMap(21.5238457, 71.806898, 23.0201818, 72.439658);
    }, 1000);
  }

  ngOnInit() {

  }
  loadMap(latOri, lngOri, latDest, lngDest) {

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay = new google.maps.DirectionsRenderer();
    var bounds = new google.maps.LatLngBounds;

    var origin1 = { lat: parseFloat(latOri), lng: parseFloat(lngOri) };
    var destinationA = { lat: latDest, lng: lngDest };

    var destinationIcon = 'https://cdn-icons.flaticon.com/png/512/1048/premium/1048315.png?token=exp=1635510615~hmac=7aac501884eab43f231ba42ff11e2536';
    var originIcon = 'https://cdn-icons.flaticon.com/png/512/1048/premium/1048315.png?token=exp=1635510615~hmac=7aac501884eab43f231ba42ff11e2536';
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      center: { lat: latOri, lng: lngOri },
      disableDefaultUI: true,
      zoom: 15
    });

    const logo = {
      url: 'assets/taxi.png',
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };

    const marker = new google.maps.Marker({
      map: map,
      position: origin1,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    const markerCust = new google.maps.Marker({
      map: map,
      position: destinationA,
      animation: google.maps.Animation.DROP,
      icon: logo,
    });
    marker.setMap(map);
    markerCust.setMap(map);

    directionsDisplay.setMap(map);
    var geocoder = new google.maps.Geocoder;

    var service = new google.maps.DistanceMatrixService;

    service.getDistanceMatrix({
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      unitSystem: google.maps.UnitSystem.METRIC,
      avoidHighways: false,
      avoidTolls: false,
    }, (response, status) => {
      if (status !== 'OK') {
        alert('Error was: ' + status);
      } else {
        var originList = response.originAddresses;
        var destinationList = response.destinationAddresses;
        var outputDiv = document.getElementById('output');


        var showGeocodedAddressOnMap = function (asDestination) {
          var icon = asDestination ? destinationIcon : originIcon;
          return function (results, status) {
            if (status === 'OK') {
              map.fitBounds(bounds.extend(results[0].geometry.location));
            } else {
              alert('Geocode was not successful due to: ' + status);
            }
          };
        };

        directionsService.route({
          origin: origin1,
          destination: destinationA,
          travelMode: 'DRIVING',
          provideRouteAlternatives: true
        }, (response, status) => {
          console.log('all routes==??', response);;

          if (status === 'OK') {

            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


        for (var i = 0; i < originList.length; i++) {
          var results = response.rows[i].elements;
          geocoder.geocode({ 'address': originList[i] },
            showGeocodedAddressOnMap(false));
          for (var j = 0; j < results.length; j++) {
            geocoder.geocode({ 'address': destinationList[j] },
              showGeocodedAddressOnMap(true));
          }
        }
      }
    });
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToSelect() {
    this.router.navigate(['select-ride']);
  }



}
