import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloPage } from './hello.page';

const routes: Routes = [
  {
    path: '',
    component: HelloPage
  },
  {
    path: 'welcome',
    loadChildren: () => import('../Hello/welcome/welcome.module').then( m => m.WelcomePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelloPageRoutingModule {}
