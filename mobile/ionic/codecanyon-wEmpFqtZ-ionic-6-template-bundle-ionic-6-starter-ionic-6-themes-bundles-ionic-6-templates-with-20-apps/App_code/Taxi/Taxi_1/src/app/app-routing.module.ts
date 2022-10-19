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
    loadChildren: () => import('./pages/phone-login/phone-login.module').then( m => m.PhoneLoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'phone-login',
    loadChildren: () => import('./pages/phone-login/phone-login.module').then( m => m.PhoneLoginPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ride-summary',
    loadChildren: () => import('./pages/ride-summary/ride-summary.module').then( m => m.RideSummaryPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'request-ride',
    loadChildren: () => import('./pages/request-ride/request-ride.module').then( m => m.RequestRidePageModule)
  },
  {
    path: 'ongoing-ride',
    loadChildren: () => import('./pages/ongoing-ride/ongoing-ride.module').then( m => m.OngoingRidePageModule)
  },
  {
    path: 'select-ride',
    loadChildren: () => import('./pages/select-ride/select-ride.module').then( m => m.SelectRidePageModule)
  },
  {
    path: 'driver-modal',
    loadChildren: () => import('./pages/driver-modal/driver-modal.module').then( m => m.DriverModalPageModule)
  },

  {
    path: 'ride-modal',
    loadChildren: () => import('./pages/ride-modal/ride-modal.module').then( m => m.RideModalPageModule)
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./pages/search-modal/search-modal.module').then( m => m.SearchModalPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
