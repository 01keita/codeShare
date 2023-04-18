import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'activity',
    loadChildren: () => import('./activity/activity.module').then( m => m.ActivityPageModule)
  },
  {
    path: 'activity2',
    loadChildren: () => import('./activity2/activity2.module').then( m => m.Activity2PageModule)
  },
  {
    path: 'activity3',
    loadChildren: () => import('./activity3/activity3.module').then( m => m.Activity3PageModule)
  },
  {
    path: 'arjay',
    loadChildren: () => import('./arjay/arjay.module').then( m => m.ArjayPageModule)
  },
  {
    path: 'santiago',
    loadChildren: () => import('./santiago/santiago.module').then( m => m.SantiagoPageModule)
  },
  {
    path: 'calcu',
    loadChildren: () => import('./calcu/calcu.module').then( m => m.CalcuPageModule)
  },
  {
    path: 'calcu',
    loadChildren: () => import('./calcu/calcu.module').then( m => m.CalcuPageModule)
  },
  {
    path: 'emp',
    loadChildren: () => import('./emp/emp.module').then( m => m.EmpPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
