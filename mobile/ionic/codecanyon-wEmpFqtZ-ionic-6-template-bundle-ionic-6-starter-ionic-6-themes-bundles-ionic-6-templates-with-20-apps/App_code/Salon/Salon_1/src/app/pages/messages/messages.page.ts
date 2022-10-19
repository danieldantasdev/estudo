/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  current: any = 'chats';
  list: any[] = [
    {
      avtar: 'assets/imgs/avtar/user1.png',
      receiver_name: 'Rahul',
      receiver_last_name: 'Jograna',
      updated_at: 'Now',
      last_message: 'Hi there!'
    },
    {
      avtar: 'assets/imgs/avtar/user2.png',
      receiver_name: 'Jung',
      receiver_last_name: 'Carden',
      updated_at: 'Yesterday',
      last_message: 'How are you buddy'
    },
    {
      avtar: 'assets/imgs/avtar/user3.png',
      receiver_name: 'Larry',
      receiver_last_name: 'Salas',
      updated_at: 'Yesterday',
      last_message: 'Lorem impus a simple text'
    },
    {
      avtar: 'assets/imgs/avtar/user4.png',
      receiver_name: 'Dorthy',
      receiver_last_name: 'Higginbotham',
      updated_at: 'July 15, 2020',
      last_message: 'Hi there!'
    },
    {
      avtar: 'assets/imgs/avtar/user5.png',
      receiver_name: 'Larry',
      receiver_last_name: 'Amato',
      updated_at: 'July 15, 2020',
      last_message: 'Lorem impus a simple text'
    },
    {
      avtar: 'assets/imgs/avtar/user6.png',
      receiver_name: 'Bettye',
      receiver_last_name: 'Casey',
      updated_at: 'July 15, 2020',
      last_message: 'Hi there!'
    },
    {
      avtar: 'assets/imgs/avtar/user7.png',
      receiver_name: 'Beryl',
      receiver_last_name: 'Brant',
      updated_at: 'July 15, 2020',
      last_message: 'Lorem impus a simple text'
    },
    {
      avtar: 'assets/imgs/avtar/user8.png',
      receiver_name: 'Joyce',
      receiver_last_name: 'Gray',
      updated_at: 'July 15, 2020',
      last_message: 'Hi there!'
    },
    {
      avtar: 'assets/imgs/avtar/user9.png',
      receiver_name: 'Jose',
      receiver_last_name: 'Mason',
      updated_at: 'July 15, 2020',
      last_message: 'Lorem impus a simple text'
    },
    {
      avtar: 'assets/imgs/avtar/user10.png',
      receiver_name: 'Kevin',
      receiver_last_name: 'Jones',
      updated_at: 'July 15, 2020',
      last_message: 'Hi there!'
    },
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  segmentChanged(ev) {

  }

  openChat(item) {
    console.log(item);
    const param: NavigationExtras = {
      queryParams: {
        info: JSON.stringify(item)
      }
    }
    this.router.navigate(['chats'], param);
  }

  openCall(item) {
    console.log(item);
    this.router.navigate(['video-call']);
  }
}
