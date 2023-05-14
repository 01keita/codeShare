import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FpagePageRoutingModule } from './fpage-routing.module';

import { FpagePage } from './fpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FpagePageRoutingModule
  ],
  declarations: [FpagePage]
})
export class FpagePageModule {}
