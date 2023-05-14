import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activity2PageRoutingModule } from './activity2-routing.module';

import { Activity2Page } from './activity2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activity2PageRoutingModule
  ],
  declarations: [Activity2Page]
})
export class Activity2PageModule {}
