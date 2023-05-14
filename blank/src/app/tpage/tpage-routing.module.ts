import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TpagePage } from './tpage.page';

const routes: Routes = [
  {
    path: '',
    component: TpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TpagePageRoutingModule {}
