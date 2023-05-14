import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpagePage } from './spage.page';

const routes: Routes = [
  {
    path: '',
    component: SpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpagePageRoutingModule {}
