import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpPage } from './emp.page';

const routes: Routes = [
  {
    path: '',
    component: EmpPage
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpPageRoutingModule {}
