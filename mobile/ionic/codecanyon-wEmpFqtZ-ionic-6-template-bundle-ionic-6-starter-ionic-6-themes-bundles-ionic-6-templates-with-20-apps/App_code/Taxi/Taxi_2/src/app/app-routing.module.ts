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
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'my-location',
    loadChildren: () => import('./pages/my-location/my-location.module').then( m => m.MyLocationPageModule)
  },
  {
    path: 'search-location',
    loadChildren: () => import('./pages/search-location/search-location.module').then( m => m.SearchLocationPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },
  {
    path: 'promo-code',
    loadChildren: () => import('./pages/promo-code/promo-code.module').then( m => m.PromoCodePageModule)
  },
  {
    path: 'cancel-request',
    loadChildren: () => import('./pages/cancel-request/cancel-request.module').then( m => m.CancelRequestPageModule)
  },
  {
    path: 'complaint',
    loadChildren: () => import('./pages/complaint/complaint.module').then( m => m.ComplaintPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'book-later',
    loadChildren: () => import('./pages/book-later/book-later.module').then( m => m.BookLaterPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'my-trips',
    loadChildren: () => import('./pages/my-trips/my-trips.module').then( m => m.MyTripsPageModule)
  },
  {
    path: 'rate-card',
    loadChildren: () => import('./pages/rate-card/rate-card.module').then( m => m.RateCardPageModule)
  },
  {
    path: 'news-offers',
    loadChildren: () => import('./pages/news-offers/news-offers.module').then( m => m.NewsOffersPageModule)
  },
  {
    path: 'emergency-contacts',
    loadChildren: () => import('./pages/emergency-contacts/emergency-contacts.module').then( m => m.EmergencyContactsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'delete-favourite',
    loadChildren: () => import('./pages/delete-favourite/delete-favourite.module').then( m => m.DeleteFavouritePageModule)
  },
  {
    path: 'book-detail',
    loadChildren: () => import('./pages/book-detail/book-detail.module').then( m => m.BookDetailPageModule)
  },
  {
    path: 'fare-detail',
    loadChildren: () => import('./pages/fare-detail/fare-detail.module').then( m => m.FareDetailPageModule)
  },
  {
    path: 'driver-detail',
    loadChildren: () => import('./pages/driver-detail/driver-detail.module').then( m => m.DriverDetailPageModule)
  },
  {
    path: 'trip-detail',
    loadChildren: () => import('./pages/trip-detail/trip-detail.module').then( m => m.TripDetailPageModule)
  },

  {
    path: 'mobile',
    loadChildren: () => import('./pages/mobile/mobile.module').then( m => m.MobilePageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'email',
    loadChildren: () => import('./pages/email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'verification',
    loadChildren: () => import('./pages/verification/verification.module').then( m => m.VerificationPageModule)
  },
  {
    path: 'social-connect',
    loadChildren: () => import('./pages/social-connect/social-connect.module').then( m => m.SocialConnectPageModule)
  },
  {
    path: 'locations',
    loadChildren: () => import('./pages/locations/locations.module').then( m => m.LocationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
