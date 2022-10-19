import { LocationsPage } from './../locations/locations.page';
import { DeleteFavouritePage } from './../delete-favourite/delete-favourite.page';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage implements OnInit {

    tabID = 1;
    constructor(private modalCtrl: ModalController, private router: Router) { }

    ngOnInit() {
    }

    async openDeleteModal() {
        const modal = await this.modalCtrl.create({
            component : DeleteFavouritePage,
            cssClass: 'delete_modal',
            showBackdrop: true,
        });
        modal.present();
    }

    goToBookDetail() {
        this.modalCtrl.dismiss();
        this.router.navigate(['/book-detail']);
    }

    close() {
        this.modalCtrl.dismiss();
    }

    async openLocations() {
        const modal = await this.modalCtrl.create({
            component : LocationsPage,
        });
        modal.present();
    }

}
