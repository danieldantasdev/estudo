/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
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
    path: 'friends',
    loadChildren: () => import('./pages/friends/friends.module').then(m => m.FriendsPageModule)
  },
  {
    path: 'messages',
    loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
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
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'feeds',
    loadChildren: () => import('./pages/feeds/feeds.module').then(m => m.FeedsPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesPageModule)
  },
  {
    path: 'hobbies',
    loadChildren: () => import('./pages/hobbies/hobbies.module').then(m => m.HobbiesPageModule)
  },
  {
    path: 'match',
    loadChildren: () => import('./pages/match/match.module').then(m => m.MatchPageModule)
  },
  {
    path: 'search-profile',
    loadChildren: () => import('./pages/search-profile/search-profile.module').then(m => m.SearchProfilePageModule)
  },
  {
    path: 'conversations',
    loadChildren: () => import('./pages/conversations/conversations.module').then(m => m.ConversationsPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'profile-categories',
    loadChildren: () => import('./pages/profile-categories/profile-categories.module').then(m => m.ProfileCategoriesPageModule)
  },
  {
    path: 'profile-categories2',
    loadChildren: () => import('./pages/profile-categories2/profile-categories2.module').then(m => m.ProfileCategories2PageModule)
  },
  {
    path: 'reference-code',
    loadChildren: () => import('./pages/reference-code/reference-code.module').then(m => m.ReferenceCodePageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./pages/chat2/chat2.module').then(m => m.Chat2PageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'chat3',
    loadChildren: () => import('./pages/chat3/chat3.module').then(m => m.Chat3PageModule)
  },
  {
    path: 'profile-comments',
    loadChildren: () => import('./pages/profile-comments/profile-comments.module').then(m => m.ProfileCommentsPageModule)
  },
  {
    path: 'chat1',
    loadChildren: () => import('./pages/chat1/chat1.module').then(m => m.Chat1PageModule)
  },
  {
    path: 'profile-timeline',
    loadChildren: () => import('./pages/profile-timeline/profile-timeline.module').then(m => m.ProfileTimelinePageModule)
  },
  {
    path: 'live',
    loadChildren: () => import('./pages/live/live.module').then(m => m.LivePageModule)
  },
  {
    path: 'verify-identity',
    loadChildren: () => import('./pages/verify-identity/verify-identity.module').then(m => m.VerifyIdentityPageModule)
  },
  {
    path: 'payments-method',
    loadChildren: () => import('./pages/payments-method/payments-method.module').then(m => m.PaymentsMethodPageModule)
  },
  {
    path: 'calling1',
    loadChildren: () => import('./pages/calling1/calling1.module').then(m => m.Calling1PageModule)
  },
  {
    path: 'calling2',
    loadChildren: () => import('./pages/calling2/calling2.module').then(m => m.Calling2PageModule)
  },
  {
    path: 'my-friend',
    loadChildren: () => import('./pages/my-friend/my-friend.module').then(m => m.MyFriendPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  },
  {
    path: 'touch-scanning',
    loadChildren: () => import('./pages/touch-scanning/touch-scanning.module').then(m => m.TouchScanningPageModule)
  },
  {
    path: 'out-going',
    loadChildren: () => import('./pages/out-going/out-going.module').then(m => m.OutGoingPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./pages/rate/rate.module').then(m => m.RatePageModule)
  },
  {
    path: 'profile1',
    loadChildren: () => import('./pages/profile1/profile1.module').then(m => m.Profile1PageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
