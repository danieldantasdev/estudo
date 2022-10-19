/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ToastController, NavController, MenuController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  isLoading = false;
  public translations: any[] = [];
  public default_country_code: any = '';
  public user_verification: any = 0;
  public user_login_with: any = 0;

  public themeColor = [
    { name: 'Default', class: 'default' },
    { name: 'Dark', class: 'dark-theme' },
  ];

  public userInfo: any;
  public general: any;

  public cside: any = 'left';
  public currecny: any = '$';
  public appName: any;

  public appLogo: any;
  public direction: any;

  public show_booking: boolean = true;
  public app_color: any;

  public app_status: boolean = true;
  public app_closed_message: any = '';
  // private offerAdded = new Subject<any>();

  public settingInfo: any;

  public adminInfo: any;

  public isWebOrPWA: boolean = false;

  public diningInformations: any;
  orderStatus = [
    'Created',
    'Accepted',
    'Prepared',
    'Ongoing',
    'Delivered',
    'Pending Payments',
    'Cancelled',
    'Refunded',
    'Rejected'
  ];

  paidMethods = [
    'Index',
    'COD',
    'STRIPE',
    'PAYPAL',
    'PAYTM',
    'RAZORPAY',
    'INSTAMOJO',
    'PAYSTACK',
    'FLUTTERWAVE',
    'PAYKUN'
  ];
  public loggedIN: boolean = false;

  public home_style: any = 1;

  public countrys: any[] = [];
  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    // this.appName = environment.appName;
  }


  translate(str) {
    if (this.translations[str]) {
      return this.translations[str];
    }
    return str;
  }





  openMenu() {
    this.menuCtrl.open();
  }

  async show(msg?) {
    this.isLoading = true;
    return await this.loadingCtrl.create({
      message: msg,
      spinner: 'bubbles',
    }).then(a => {
      a.present().then(() => {
        //console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
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
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSimpleAlert(msg) {
    const alert = await this.alertCtrl.create({
      header: '',
      message: msg,
      buttons: ['OK']
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
      buttons: ['OK']
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
        header: 'Warning',
        message: 'Please enter valid email',
        buttons: ['OK']
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

  async showToast(msg, colors, positon) {


    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: colors,
      position: positon
    });
    toast.present();
    // await Haptics.impact({ style: ImpactStyle.Medium });
  }
  async shoNotification(msg, colors, positon) {

    const toast = await this.toastCtrl.create({
      message: this.translate(msg),
      duration: 4000,
      color: colors,
      position: positon,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
    // await Haptics.impact({ style: ImpactStyle.Medium });

  }

  async errorToast(msg, color?) {

    const toast = await this.toastCtrl.create({
      message: this.translate(msg),
      duration: 2000,
      color: color ? color : 'dark'
    });
    toast.present();
    // await Haptics.impact({ style: ImpactStyle.Medium });

  }

  apiErrorHandler(err) {
    // console.log('Error got in service =>', err)
    if (err && err.status === 401 && err.error.error) {
      this.errorToast(err.error.error);
      this.navCtrl.navigateRoot('/login');
      return false;
    }
    if (err && err.status === 500 && err.error.error) {
      this.errorToast(err.error.error);
      return false;
    }
    if (err.status === -1) {
      this.errorToast('Failed To Connect With Server');
    } else if (err.status === 401) {
      this.errorToast('Unauthorized Request!');
      this.navCtrl.navigateRoot('/login');
    } else if (err.status === 500) {
      this.errorToast('Somethimg Went Wrong');
    } else if (err.status === 422 && err.error.error) {
      this.errorToast(err.error.error);
    } else {
      this.errorToast('Something went wrong');
    }

  }

  // setDetails(data) {
  //   this.details = null;
  //   this.details = data;
  // }
  // getDetails() {
  //   return this.details;
  // }

  makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  public loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
