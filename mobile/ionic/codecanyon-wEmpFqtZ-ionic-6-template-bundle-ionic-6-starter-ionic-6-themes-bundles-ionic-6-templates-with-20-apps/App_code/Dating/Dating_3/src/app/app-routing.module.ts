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
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'love-request',
    loadChildren: () => import('./pages/love-request/love-request.module').then( m => m.LoveRequestPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'onboard',
    loadChildren: () => import('./pages/onboard/onboard.module').then( m => m.OnboardPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'profile-setup',
    loadChildren: () => import('./pages/profile-setup/profile-setup.module').then( m => m.ProfileSetupPageModule)
  },
  {
    path: 'terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  {
    path: 'set-location',
    loadChildren: () => import('./pages/set-location/set-location.module').then( m => m.SetLocationPageModule)
  },
  {
    path: 'interested-in',
    loadChildren: () => import('./pages/interested-in/interested-in.module').then( m => m.InterestedInPageModule)
  },
  {
    path: 'filters',
    loadChildren: () => import('./pages/filters/filters.module').then( m => m.FiltersPageModule)
  },
  {
    path: 'friends-profile',
    loadChildren: () => import('./pages/friends-profile/friends-profile.module').then( m => m.FriendsProfilePageModule)
  },
  {
    path: 'chat-page',
    loadChildren: () => import('./pages/chat-page/chat-page.module').then( m => m.ChatPagePageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/match/match.module').then( m => m.MatchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
