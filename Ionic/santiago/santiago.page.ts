import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewUserInfoComponent } from './view-info/view-info.component';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-santiago',
  templateUrl: './santiago.page.html',
  styleUrls: ['./santiago.page.scss'],
})
export class SantiagoPage implements OnInit {

  number=0;
  showRes:any;
  constructor(private mdlCtrl: ModalController) { }

  ngOnInit() {
  }


  async view_user_info(number:any){

    const model_view_info = await this.mdlCtrl.create({
      component : ViewUserInfoComponent,
      componentProps: {data: number}
    })

    model_view_info.present();

    const {data, role} = await model_view_info.onWillDismiss();
    this.showRes=("First Number: "+data.Fnumb +" "+ role + " Second Number: " + data.Snumb + " Result =" +data.Rnumb );

  }

}
