import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Activity3Page } from './activity3.page';

const routes: Routes = [
  {
    path: '',
    component: Activity3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Activity3PageRoutingModule {}
