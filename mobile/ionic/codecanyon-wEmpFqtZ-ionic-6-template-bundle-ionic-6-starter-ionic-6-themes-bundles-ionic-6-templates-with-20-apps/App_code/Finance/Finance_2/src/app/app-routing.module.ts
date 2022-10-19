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
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'verification-code',
    loadChildren: () => import('./pages/verification-code/verification-code.module').then(m => m.VerificationCodePageModule)
  },
  {
    path: 'congratulation',
    loadChildren: () => import('./pages/congratulation/congratulation.module').then(m => m.CongratulationPageModule)
  },
  {
    path: 'currency',
    loadChildren: () => import('./pages/currency/currency.module').then(m => m.CurrencyPageModule)
  },
  {
    path: 'buy',
    loadChildren: () => import('./pages/buy/buy.module').then(m => m.BuyPageModule)
  },
  {
    path: 'wallet',
    loadChildren: () => import('./pages/wallet/wallet.module').then(m => m.WalletPageModule)
  },
  {
    path: 'deposit1',
    loadChildren: () => import('./pages/deposit1/deposit1.module').then(m => m.Deposit1PageModule)
  },
  {
    path: 'deposit2',
    loadChildren: () => import('./pages/deposit2/deposit2.module').then(m => m.Deposit2PageModule)
  },
  {
    path: 'verify1',
    loadChildren: () => import('./pages/verify1/verify1.module').then(m => m.Verify1PageModule)
  },
  {
    path: 'verify2',
    loadChildren: () => import('./pages/verify2/verify2.module').then(m => m.Verify2PageModule)
  },
  {
    path: 'verify3',
    loadChildren: () => import('./pages/verify3/verify3.module').then(m => m.Verify3PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./pages/search-modal/search-modal.module').then(m => m.SearchModalPageModule)
  },
  {
    path: 'assets',
    loadChildren: () => import('./pages/assets/assets.module').then(m => m.AssetsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
