/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-near-me',
  templateUrl: './near-me.page.html',
  styleUrls: ['./near-me.page.scss'],
})
export class NearMePage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  loading: boolean = true;
  map: any;
  slideOpts = {
    slidesPerView: 1.2,
  };
  userList = [
    {
      img: 'assets/imgs/avtar/user1.png',
      name: 'Mausam',
      status: '0',
      time: '6:00 pm',
      callType: 'call',
      callTime: '7 May, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user2.png',
      name: 'Rahul',
      status: '1',
      time: '5:00 pm',
      callType: 'call',
      callTime: '5 May, 6:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user3.png',
      name: 'Krishna',
      status: '2',
      time: '3:30 pm',
      callType: 'call',
      callTime: '1 April, 8:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user4.png',
      name: 'David',
      status: '0',
      time: '12:30 pm',
      callType: 'video',
      callTime: '25 April, 8:00 am',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user5.png',
      name: 'Jonh',
      status: '1',
      time: 'Yesterday',
      callType: 'video',
      callTime: '23 April, 7:00 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user6.png',
      name: 'Mike',
      status: '2',
      time: 'Yesterday',
      callType: 'call',
      callTime: '19 April, 8:42 pm',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user7.png',
      name: 'Joseph',
      status: '2',
      time: 'Yesterday',
      callType: 'video',
      callTime: '19 April, 6:42 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user8.png',
      name: 'Alize',
      status: '2',
      time: '07/05/20',
      callType: 'video',
      callTime: '17 April, 5:00 pm',
      callStatus: '0',
    },
    {
      img: 'assets/imgs/avtar/user9.png',
      name: 'Emma',
      status: '1',
      time: '07/05/20',
      callType: 'call',
      callTime: '15 April, 9:00 am',
      callStatus: '1',
    },
    {
      img: 'assets/imgs/avtar/user10.png',
      name: 'Sophia',
      status: '1',
      time: '05/05/20',
      callType: 'call',
      callTime: '10 April, 10:00 pm',
      callStatus: '1',
    },
  ];
  salon = [
    {
      img: 'assets/imgs/sliders/1.jpg',
      name: 'Reflection Beauty Salon'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Elegance - The Unisex Salon'
    },
    {
      img: 'assets/imgs/sliders/3.jpg',
      name: 'Pawan Hair Salon'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Neeva Unisex Salon'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Ilora Beauty Parlour'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Precise the family saloon'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Toppers'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Empire the unisex salon'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Nikhar Beauty Parlour'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Toppers'
    },
    {
      img: 'assets/imgs/sliders/2.jpg',
      name: 'Empire the unisex salon'
    }
  ];
  constructor() {
    setTimeout(() => {
      this.loading = false;
      this.getULocation();
    }, 1000);
  }

  ngOnInit() {
  }



  getULocation() {
    let map;
    const markersOnMap = [
      {
        placeName: 'The Look.',
        cover: 'assets/imgs/avtar/user1.png',
        LatLng: [
          {
            lat: 21.598050,
            lng: 71.935396
          }
        ]
      },
      {
        placeName: 'Mane Beautilocks',
        cover: 'assets/imgs/avtar/user2.png',
        LatLng: [
          {
            lat: 21.573454,
            lng: 71.729776,
          }
        ]
      },
      {
        placeName: 'Cappiello Salon',
        cover: 'assets/imgs/avtar/user3.png',
        LatLng: [
          {
            lat: 21.716109,
            lng: 71.868795
          }
        ]
      },
      {
        placeName: 'Cute Cut',
        cover: 'assets/imgs/avtar/user4.png',
        LatLng: [
          {
            lat: 21.580185,
            lng: 71.783582
          }
        ]
      },
      {
        placeName: 'Bombshell Studio.',
        cover: 'assets/imgs/avtar/user5.png',
        LatLng: [
          {
            lat: 21.5700318,
            lng: 71.8721725
          }
        ]
      },
    ];

    var InforObj = [];
    var centerCords = {
      lat: 21.5346,
      lng: 71.8275
    };
    initMap();

    function addMarker() {
      for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
          '</h1></div>';
        const icon = {
          url: markersOnMap[i].cover,
          scaledSize: new google.maps.Size(30, 30), // scaled size
          origin: new google.maps.Point(0, 0), // origin
          anchor: new google.maps.Point(0, 0) // anchor
        };
        console.log(markersOnMap[i].LatLng[0]);
        const marker = new google.maps.Marker({
          position: markersOnMap[i].LatLng[0],
          map: map,
          animation: google.maps.Animation.DROP,
          icon: icon,
        });

        const infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
        });

        marker.addListener('click', function () {
          closeOtherInfo();
          infowindow.open(marker.get('map'), marker);
          InforObj[0] = infowindow;
        });

      }

      const userIcon = {
        url: 'assets/imgs/placeholder.png',
        scaledSize: new google.maps.Size(40, 40), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
      }

      const marker = new google.maps.Marker({
        position: centerCords,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: userIcon,
      });
    }

    function closeOtherInfo() {
      if (InforObj.length > 0) {
        InforObj[0].set("marker", null);
        InforObj[0].close();
        InforObj.length = 0;
      }
    }

    function initMap() {
      // map = new google.maps.Map(document.getElementById('map'), {
      //   zoom: 10,
      //   center: centerCords,
      // });
      var style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            { saturation: -100 }
          ]
        }
      ];

      var mapOptions = {
        zoom: 9,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        overviewMapControl: false,
        center: centerCords,
        mapTypeControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'nepate']
        },
        disableDefaultUI: true
      }

      map = new google.maps.Map(document.getElementById('map'), mapOptions);
      var mapType = new google.maps.StyledMapType(style, { name: 'Grayscale' });
      const cityCircle = new google.maps.Circle({
        strokeColor: "#F78407",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#F78407",
        fillOpacity: 0.35,
        map,
        center: centerCords,
        radius: Math.sqrt(50000) * 100,
      });
      map.mapTypes.set('nepate', mapType);
      map.setMapTypeId('nepate');
      addMarker();
    }

  }


  allIndividuals() {

  }

  goToBarberProfile() {

  }

  allSalon() {

  }

  openSalon() {

  }
}
