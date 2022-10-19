import { DummyService } from './../../services/dummy.service';
import { CommentsPage } from './../comments/comments.page';
import { CreatePostPage } from './../create-post/create-post.page';
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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    posts = [];

    constructor(private modalCtrl: ModalController, private dummy: DummyService) {
        this.posts = this.dummy.products;
    }

    ngOnInit() {
    }

    async openCreatePost() {
        const modal = await this.modalCtrl.create({
            component: CreatePostPage,
        });
        return await modal.present();
    }

    async openComment() {
        const modal = await this.modalCtrl.create({
            component : CommentsPage,
            showBackdrop: true,
            backdropDismiss: true,
            cssClass: 'choose_product'
        });
        return await modal.present();
    }

}
