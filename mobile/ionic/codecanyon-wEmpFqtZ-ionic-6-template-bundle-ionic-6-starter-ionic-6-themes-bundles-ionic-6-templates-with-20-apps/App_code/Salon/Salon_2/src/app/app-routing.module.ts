/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'login-phone',
    loadChildren: () => import('./pages/login-phone/login-phone.module').then(m => m.LoginPhonePageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then(m => m.VerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'mens',
    loadChildren: () => import('./pages/mens/mens.module').then(m => m.MensPageModule)
  },
  {
    path: 'select-slot',
    loadChildren: () => import('./pages/select-slot/select-slot.module').then(m => m.SelectSlotPageModule)
  },
  {
    path: 'pick-stylist',
    loadChildren: () => import('./pages/pick-stylist/pick-stylist.module').then(m => m.PickStylistPageModule)
  },
  {
    path: 'stylist-info',
    loadChildren: () => import('./pages/stylist-info/stylist-info.module').then(m => m.StylistInfoPageModule)
  },
  {
    path: 'checklist',
    loadChildren: () => import('./pages/checklist/checklist.module').then(m => m.ChecklistPageModule)
  },
  {
    path: 'service-location',
    loadChildren: () => import('./pages/service-location/service-location.module').then(m => m.ServiceLocationPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then(m => m.HistoryPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
