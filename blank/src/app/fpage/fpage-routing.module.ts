import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FpagePage } from './fpage.page';

const routes: Routes = [
  {
    path: '',
    component: FpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FpagePageRoutingModule {}
