import { ChooseProductPage } from './../choose-product/choose-product.page';
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

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }

    async openChooseProduct() {
        const modal = await this.modalCtrl.create({
            component : ChooseProductPage,
            showBackdrop: false,
            cssClass : 'choose_product'
        });
        await modal.present();
    }

}
