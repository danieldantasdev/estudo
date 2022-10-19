/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, IonContent, NavController } from '@ionic/angular';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
})
export class ChatsPage implements OnInit {
  @ViewChild(IonContent, { static: false }) content: IonContent;
  cover: any = '';
  name: any = '';
  messages = [
    {
      side: 'right',
      msg: 'assets/imgs/chat_img.png',
      type: 'img',
      time: '14:07'
    },
    {
      side: 'left',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
      type: 'text',
      time: '14:10'
    },
    {
      side: 'right',
      msg: '',
      type: 'audio',
      time: '14:15'
    },
    {
      side: 'right',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
      type: 'text',
      time: '14:15'
    },
    {
      side: 'left',
      msg: 'Lorem ipsum dolor sit amet  ',
      type: 'text',
      time: '14:10'
    },
    {
      side: 'right',
      msg: 'assets/imgs/chat_img.png',
      type: 'img',
      time: '14:07'
    },
    {
      side: 'left',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ',
      type: 'text',
      time: '14:10'
    },
    {
      side: 'right',
      msg: '',
      type: 'audio',
      time: '14:15'
    },
    {
      side: 'right',
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
      type: 'text',
      time: '14:15'
    },
    {
      side: 'left',
      msg: 'Lorem ipsum dolor sit amet  ',
      type: 'text',
      time: '14:10'
    },
  ];
  uid: any = 1;
  constructor(
    private route: ActivatedRoute,
    private actionSheetCtrl: ActionSheetController,
    private navCtrl: NavController
  ) {
    this.route.queryParams.subscribe((data: any) => {
      console.log(data);
      if (data && data.info) {
        const info = JSON.parse(data.info);
        console.log('user info', info);
        this.cover = info.avtar;
        this.name = info.receiver_name + ' ' + info.receiver_last_name;
        this.scrollToBottom();
      }
    });
  }

  scrollToBottom() {
    setTimeout(() => {
      try {
        this.content.scrollToBottom(100);
      } catch (error) {
        console.log(error);
      }

    }, 1000);
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  getTimestmap(item) {
    return 'Jul 15, 2021';
  }

  async takeImage() {
    const buttons = [
      {
        text: 'Take Photo',
        icon: 'camera',
        handler: () => {
        }
      },
      {
        text: 'Choose From Photos Photo',
        icon: 'image',
        handler: () => {
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ];

    // Only allow file selection inside a browser

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Select Image Source',
      buttons
    });
    await actionSheet.present();
  }
}
