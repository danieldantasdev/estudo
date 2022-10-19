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
    loadChildren: () => import('./pages/introduction-page/introduction-page.module').then(m => m.IntroductionPagePageModule)
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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'introduction-page',
    loadChildren: () => import('./pages/introduction-page/introduction-page.module').then(m => m.IntroductionPagePageModule)
  },
  {
    path: 'welcome-page',
    loadChildren: () => import('./pages/welcome-page/welcome-page.module').then(m => m.WelcomePagePageModule)
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
    path: 'activity-tracker',
    loadChildren: () => import('./pages/activity-tracker/activity-tracker.module').then(m => m.ActivityTrackerPageModule)
  },
  {
    path: 'add-alarm',
    loadChildren: () => import('./pages/add-alarm/add-alarm.module').then(m => m.AddAlarmPageModule)
  },
  {
    path: 'workout-schedule',
    loadChildren: () => import('./pages/workout-schedule/workout-schedule.module').then(m => m.WorkoutSchedulePageModule)
  },
  {
    path: 'sleep-schedule',
    loadChildren: () => import('./pages/sleep-schedule/sleep-schedule.module').then(m => m.SleepSchedulePageModule)
  },
  {
    path: 'your-goal',
    loadChildren: () => import('./pages/your-goal/your-goal.module').then(m => m.YourGoalPageModule)
  },
  {
    path: 'sleep-tracker',
    loadChildren: () => import('./pages/sleep-tracker/sleep-tracker.module').then(m => m.SleepTrackerPageModule)
  },
  {
    path: 'progress-photos',
    loadChildren: () => import('./pages/progress-photos/progress-photos.module').then(m => m.ProgressPhotosPageModule)
  },
  {
    path: 'workout-tracker',
    loadChildren: () => import('./pages/workout-tracker/workout-tracker.module').then(m => m.WorkoutTrackerPageModule)
  },
  {
    path: 'meal-schedule',
    loadChildren: () => import('./pages/meal-schedule/meal-schedule.module').then(m => m.MealSchedulePageModule)
  },
  {
    path: 'workout-details',
    loadChildren: () => import('./pages/workout-details/workout-details.module').then(m => m.WorkoutDetailsPageModule)
  },
  {
    path: 'fullbody-workout',
    loadChildren: () => import('./pages/fullbody-workout/fullbody-workout.module').then(m => m.FullbodyWorkoutPageModule)
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./pages/complete-profile/complete-profile.module').then(m => m.CompleteProfilePageModule)
  },
  {
    path: 'comparison',
    loadChildren: () => import('./pages/comparison/comparison.module').then(m => m.ComparisonPageModule)
  },
  {
    path: 'breakfast',
    loadChildren: () => import('./pages/breakfast/breakfast.module').then(m => m.BreakfastPageModule)
  },
  {
    path: 'success',
    loadChildren: () => import('./pages/success/success.module').then(m => m.SuccessPageModule)
  },
  {
    path: 'add-schedule',
    loadChildren: () => import('./pages/add-schedule/add-schedule.module').then(m => m.AddSchedulePageModule)
  },
  {
    path: 'meal-planner',
    loadChildren: () => import('./pages/meal-planner/meal-planner.module').then(m => m.MealPlannerPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./pages/recipes/recipes.module').then(m => m.RecipesPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./pages/result/result.module').then(m => m.ResultPageModule)
  },
  {
    path: 'other-navigationpage',
    loadChildren: () => import('./pages/other-navigationpage/other-navigationpage.module').then(m => m.OtherNavigationpagePageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
