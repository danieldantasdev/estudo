/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [

  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../match/match.module').then(
                (m) => m.MatchPageModule),
          },
        ],
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../likes/likes.module').then(
                (m) => m.LikesPageModule
              ),
          },
        ],
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(
                (m) => m.HomePageModule
              ),
          },
        ],
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('..//inbox/inbox.module').then(
                (m) => m.InboxPageModule
              ),
          },
        ],
      },
      {
        path: 'tab5',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('..//my-profile/my-profile.module').then(
                (m) => m.MyProfilePageModule
              ),
          },
        ],
      },

      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
