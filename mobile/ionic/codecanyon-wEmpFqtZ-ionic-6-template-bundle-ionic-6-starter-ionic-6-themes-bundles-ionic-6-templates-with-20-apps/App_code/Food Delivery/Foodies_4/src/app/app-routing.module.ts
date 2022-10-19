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
    loadChildren: () => import('./pages/onboard/onboard.module').then(m => m.OnboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./pages/navigation/navigation.module').then(m => m.NavigationPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'my-saved',
    loadChildren: () => import('./pages/my-saved/my-saved.module').then(m => m.MySavedPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./pages/onboard/onboard.module').then(m => m.OnboardPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then(m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then(m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'favourite',
    loadChildren: () => import('./pages/favourite/favourite.module').then(m => m.FavouritePageModule)
  },
  {
    path: 'add-items',
    loadChildren: () => import('./pages/add-items/add-items.module').then(m => m.AddItemsPageModule)
  },
  {
    path: 'my-cart',
    loadChildren: () => import('./pages/my-cart/my-cart.module').then(m => m.MyCartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then(m => m.PaymentMethodPageModule)
  },
  {
    path: 'confirm-order',
    loadChildren: () => import('./pages/confirm-order/confirm-order.module').then(m => m.ConfirmOrderPageModule)
  },
  {
    path: 'my-cards',
    loadChildren: () => import('./pages/my-cards/my-cards.module').then(m => m.MyCardsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'manage-profile',
    loadChildren: () => import('./pages/manage-profile/manage-profile.module').then(m => m.ManageProfilePageModule)
  },
  {
    path: 'my-address',
    loadChildren: () => import('./pages/my-address/my-address.module').then(m => m.MyAddressPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsPageModule)
  },
  {
    path: 'order-tracking',
    loadChildren: () => import('./pages/order-tracking/order-tracking.module').then(m => m.OrderTrackingPageModule)
  },
  {
    path: 'track-order',
    loadChildren: () => import('./pages/track-order/track-order.module').then(m => m.TrackOrderPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
