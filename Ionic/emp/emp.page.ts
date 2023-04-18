import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NgModel } from '@angular/forms';
import { UserPage } from './user/user.page';
import { BooleanValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.page.html',
  styleUrls: ['./emp.page.scss'],
})
export class EmpPage implements OnInit {

  constructor(private mdlCtrl: ModalController) { }

  Name: any;
  Address: any;

  FDoW: any;
  FSPD: any;
  FDed: any;
  FSal: any;
  FhideMe = false;


  ngOnInit() {
  }

  async user_page(Name: any, Address: any){
    const model_user_page = await this.mdlCtrl.create({
      component : UserPage,
      componentProps: { Name,  Address}
    })

    if(Name ==null ||Address ==null ){
      alert("NO INPUT!")
    }
    else if(Name ==null){
      alert("NO NAME INPUT!")
    }
    else if(Address ==null){
      alert("NO ADDRESS INPUT!")
    }
    else{
    model_user_page.present();
    }

    
    const {data} = await model_user_page.onWillDismiss();
    this.FDoW = (""+data.RDoW);
    this.FSPD = (""+data.RSPD);
    this.FDed = (""+data.RDed);
    this.FSal = (""+data.RSalary);
    this.FhideMe = (data.RhideMe);

  }

  

  

}
