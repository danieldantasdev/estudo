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
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'email-verification',
    loadChildren: () => import('./pages/email-verification/email-verification.module').then(m => m.EmailVerificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./pages/discover/discover.module').then(m => m.DiscoverPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then(m => m.FavouritesPageModule)
  },
  {
    path: 'set-password',
    loadChildren: () => import('./pages/set-password/set-password.module').then(m => m.SetPasswordPageModule)
  },
  {
    path: 'add-address',
    loadChildren: () => import('./pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
  },
  {
    path: 'delivery-addresses',
    loadChildren: () => import('./pages/delivery-addresses/delivery-addresses.module').then(m => m.DeliveryAddressesPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./pages/add-card/add-card.module').then(m => m.AddCardPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'account-info',
    loadChildren: () => import('./pages/account-info/account-info.module').then(m => m.AccountInfoPageModule)
  },
  {
    path: 'confirm-bill',
    loadChildren: () => import('./pages/confirm-bill/confirm-bill.module').then(m => m.ConfirmBillPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'create-post',
    loadChildren: () => import('./pages/create-post/create-post.module').then(m => m.CreatePostPageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule)
  },
  {
    path: 'payment-methods',
    loadChildren: () => import('./pages/payment-methods/payment-methods.module').then(m => m.PaymentMethodsPageModule)
  },
  {
    path: 'country-list',
    loadChildren: () => import('./pages/country-list/country-list.module').then(m => m.CountryListPageModule)
  },
  {
    path: 'languages',
    loadChildren: () => import('./pages/languages/languages.module').then(m => m.LanguagesPageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./pages/currency/currency.module').then(m => m.CurrencyPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./pages/product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'my-post',
    loadChildren: () => import('./pages/my-post/my-post.module').then(m => m.MyPostPageModule)
  },
  {
    path: 'choose-product',
    loadChildren: () => import('./pages/choose-product/choose-product.module').then(m => m.ChooseProductPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
