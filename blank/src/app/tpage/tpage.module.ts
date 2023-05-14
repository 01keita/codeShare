import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TpagePageRoutingModule } from './tpage-routing.module';

import { TpagePage } from './tpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TpagePageRoutingModule
  ],
  declarations: [TpagePage]
})
export class TpagePageModule {}
