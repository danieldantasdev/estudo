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
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then(m => m.ReportPageModule)
  },
  {
    path: 'logo',
    loadChildren: () => import('./pages/logo/logo.module').then(m => m.LogoPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then(m => m.FoodPageModule)
  },
  {
    path: 'payment-counter',
    loadChildren: () => import('./pages/payment-counter/payment-counter.module').then(m => m.PaymentCounterPageModule)
  },
  {
    path: 'confirm-transaction',
    loadChildren: () => import('./pages/confirm-transaction/confirm-transaction.module').then(m => m.ConfirmTransactionPageModule)
  },
  {
    path: 'code-scan',
    loadChildren: () => import('./pages/code-scan/code-scan.module').then(m => m.CodeScanPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'cash-in',
    loadChildren: () => import('./pages/cash-in/cash-in.module').then(m => m.CashInPageModule)
  },
  {
    path: 'successful-cash',
    loadChildren: () => import('./pages/successful-cash/successful-cash.module').then(m => m.SuccessfulCashPageModule)
  },
  {
    path: 'successful-payment',
    loadChildren: () => import('./pages/successful-payment/successful-payment.module').then(m => m.SuccessfulPaymentPageModule)
  },
  {
    path: 'new-transaction',
    loadChildren: () => import('./pages/new-transaction/new-transaction.module').then(m => m.NewTransactionPageModule)
  },
  {
    path: 'select-categories',
    loadChildren: () => import('./pages/select-categories/select-categories.module').then(m => m.SelectCategoriesPageModule)
  },
  {
    path: 'report-modal',
    loadChildren: () => import('./pages/report-modal/report-modal.module').then(m => m.ReportModalPageModule)
  },
  {
    path: 'promotions',
    loadChildren: () => import('./pages/promotions/promotions.module').then(m => m.PromotionsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
