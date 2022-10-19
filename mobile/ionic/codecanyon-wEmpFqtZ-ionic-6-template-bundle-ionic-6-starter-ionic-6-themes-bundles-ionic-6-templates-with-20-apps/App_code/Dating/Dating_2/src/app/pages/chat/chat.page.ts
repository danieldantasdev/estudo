/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(private router: Router,
    private NavCtrl: NavController) { }

  ngOnInit() {
  }
  goToBack() {
    this.NavCtrl.back();
  }

  goToFriend() {
    this.router.navigate(['friends'])
  }


  messages = [
    {
      side: 'left',
      msg: 'Hello'
    },
    {
      side: 'right',
      msg: 'Hii'
    },
    {
      side: 'left',
      msg: 'okay'
    },
    {
      side: 'right',
      msg: 'This Is Chat of datting app. how about you'
    },
    {
      side: 'left',
      msg: 'Can we date for coffee'
    },
    {
      side: 'right',
      msg: 'yes of course'
    }
  ]

}
