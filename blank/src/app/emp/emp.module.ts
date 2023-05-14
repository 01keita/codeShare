import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpPageRoutingModule } from './emp-routing.module';

import { EmpPage } from './emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpPageRoutingModule
  ],
  declarations: [EmpPage]
})
export class EmpPageModule {}
