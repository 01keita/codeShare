import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpagePageRoutingModule } from './spage-routing.module';

import { SpagePage } from './spage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpagePageRoutingModule
  ],
  declarations: [SpagePage]
})
export class SpagePageModule {}
