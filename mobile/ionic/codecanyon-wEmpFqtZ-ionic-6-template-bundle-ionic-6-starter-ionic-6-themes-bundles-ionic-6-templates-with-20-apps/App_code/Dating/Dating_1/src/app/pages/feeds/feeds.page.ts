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
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.page.html',
  styleUrls: ['./feeds.page.scss'],
})
export class FeedsPage implements OnInit {

  constructor(
    public util: UtilService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onFav() {
    this.router.navigate(['match'])
  }
  onMessage() {
    this.router.navigate(['conversations']);
  }
  onVideo() {
    this.router.navigate(['videos']);
  }
  onSettings() {
    this.router.navigate(['settings']);
  }
  onList() {
    this.router.navigate(['my-friend']);
  }
  onStory() {
    this.router.navigate(['profile-comments']);
  }
  onComment() {
    this.router.navigate(['live']);
  }
  onProfile() {
    this.router.navigate(['profile-categories2']);
  }
  onHome() {
    this.router.navigate(['home']);
  }
  onShare() {
    this.router.navigate(['profile1']);
  }
  onSave() {
    this.router.navigate(['rate']);
  }
  onMenu() {

  }
  onConfirm() {

  }

}
