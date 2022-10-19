/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class UtilService {
  loader: any;
  isLoading = false;
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public router: Router,
    private navCtrl: NavController,
    private menuController: MenuController
  ) {
  }
  openMenu() {
    this.menuController.open();
  }
  /*
  Start Loader
  Call this method to Start your Loader
  */
  async show() {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      // duration: 5000,
      spinner: 'dots',
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  success_msg(title) {
    Swal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }
  async hide() {
    this.isLoading = false;
    return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  }
  /*
    Show Warning Alert Message
    param : msg = message to display
    Call this method to show Warning Alert,
    */
  async showWarningAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: msg,
      buttons: ['ok']
    });
    await alert.present();
  }
  async showSimpleAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'warning',
      message: msg,
      buttons: ['ok']
    });
    await alert.present();
  }
  /*
   Show Error Alert Message
   param : msg = message to display
   Call this method to show Error Alert,
   */
  async showErrorAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: 'Error',
      message: msg,
      buttons: ['ok']
    });
    await alert.present();
  }
  /*
     param : email = email to verify
     Call this method to get verify email
     */
  async getEmailFilter(email) {
    const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
    if (!(emailfilter.test(email))) {
      const alert = await this.alertCtrl.create({
        header: 'warning',
        message: 'Please enter valid email',
        buttons: ['ok']
      });
      await alert.present();
      return false;
    } else {
      return true;
    }
  }
  /*
    Show Toast Message on Screen
     param : msg = message to display, color= background
      color of toast example dark,danger,light. position  = position of message example top,bottom
     Call this method to show toast message
     */
  async showToast(msg, color, positon) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color,
      position: positon
    });
    toast.present();
  }
  async errorToast(msg, color?) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: color ? 'dark' : 'light'
    });
    toast.present();
  }
  apiErrorHandler(err) {
    console.log('error', err);
  }
}
