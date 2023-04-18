import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Activity3PageRoutingModule } from './activity3-routing.module';

import { Activity3Page } from './activity3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Activity3PageRoutingModule
  ],
  declarations: [Activity3Page]
})
export class Activity3PageModule {}
