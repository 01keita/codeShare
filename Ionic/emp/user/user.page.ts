import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavParams } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { EmpPage } from '../emp.page';
import { kill } from 'process';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(private mdlCtrl: ModalController, private navParams: NavParams) { }

 
  Address = this.navParams.get('Address');
  Name = this.navParams.get('Name');
  data: any;

  hideMe = false;
  DoW: any;
  SPD: any;
  Ded: any;
  Salary: any;
  ngOnInit() {
  }


  hiddenRes(){
    this.Salary = (parseFloat(this.SPD) * parseFloat(this.DoW)) - parseFloat(this.Ded);
    this.hideMe = true;
    return this.mdlCtrl.dismiss({RDoW: this.DoW, RSPD: this.SPD, RDed: this.Ded, RSalary: this.Salary, RhideMe: this.hideMe})
  }
  

  cancel_modal(){
    return this.mdlCtrl.dismiss("canceled action", "cancel" );
  }


  

}
