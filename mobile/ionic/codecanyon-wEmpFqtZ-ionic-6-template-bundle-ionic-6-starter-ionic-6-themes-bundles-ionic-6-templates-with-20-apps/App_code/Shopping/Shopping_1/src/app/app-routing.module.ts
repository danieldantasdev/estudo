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
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('./pages/favorite/favorite.module').then(m => m.FavoritePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'search-products',
    loadChildren: () => import('./pages/search-products/search-products.module').then(m => m.SearchProductsPageModule)
  },
  {
    path: 'products-details',
    loadChildren: () => import('./pages/products-details/products-details.module').then(m => m.ProductsDetailsPageModule)
  },
  {
    path: 'products-video',
    loadChildren: () => import('./pages/products-video/products-video.module').then(m => m.ProductsVideoPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'size',
    loadChildren: () => import('./pages/size/size.module').then(m => m.SizePageModule)
  },
  {
    path: 'checkout-city',
    loadChildren: () => import('./pages/checkout-city/checkout-city.module').then(m => m.CheckoutCityPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'orders-details',
    loadChildren: () => import('./pages/orders-details/orders-details.module').then(m => m.OrdersDetailsPageModule)
  },
  {
    path: 'gift-card',
    loadChildren: () => import('./pages/gift-card/gift-card.module').then(m => m.GiftCardPageModule)
  },
  {
    path: 'user-details',
    loadChildren: () => import('./pages/user-details/user-details.module').then(m => m.UserDetailsPageModule)
  },
  {
    path: 'payment-address',
    loadChildren: () => import('./pages/payment-address/payment-address.module').then(m => m.PaymentAddressPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then(m => m.CardPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'gift-card2',
    loadChildren: () => import('./pages/gift-card2/gift-card2.module').then(m => m.GiftCard2PageModule)
  },
  {
    path: 'gift-card3',
    loadChildren: () => import('./pages/gift-card3/gift-card3.module').then(m => m.GiftCard3PageModule)
  },
  {
    path: 'my-orders',
    loadChildren: () => import('./pages/my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
  },
  {
    path: 'new-in',
    loadChildren: () => import('./pages/new-in/new-in.module').then(m => m.NewInPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'refine',
    loadChildren: () => import('./pages/refine/refine.module').then(m => m.RefinePageModule)
  },
  {
    path: 'price',
    loadChildren: () => import('./pages/price/price.module').then(m => m.PricePageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then(m => m.SettingPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
