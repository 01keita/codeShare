import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArjayPageRoutingModule } from './arjay-routing.module';

import { ArjayPage } from './arjay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArjayPageRoutingModule
  ],
  declarations: [ArjayPage]
})
export class ArjayPageModule {}
