import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArjayPage } from './arjay.page';

const routes: Routes = [
  {
    path: '',
    component: ArjayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArjayPageRoutingModule {}
