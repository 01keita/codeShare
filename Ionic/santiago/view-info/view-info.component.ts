import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';


@Component({
  selector: 'app-view-info',
  templateUrl: './view-info.component.html',
  styleUrls: ['./view-info.component.scss'],
})
export class ViewUserInfoComponent implements OnInit {
  number2: any;
  result=0;
  constructor(private modlCtrl: ModalController, private navParams: NavParams) { }

  data= this.navParams.get('data');
  ngOnInit() {}


  add(){
    this.result = parseInt(this.data) + parseInt(this.number2);
    return this.modlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "+");
  }
  sub(){
    this.result = parseInt(this.data) - parseInt(this.number2);
    return this.modlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "-");
  }
  mul(){
    this.result = parseInt(this.data) * parseInt(this.number2);
    return this.modlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "*");
  }
  div(){
    this.result = parseInt(this.data) / parseInt(this.number2);
    return this.modlCtrl.dismiss({Fnumb: this.data, Snumb: this.number2, Rnumb: this.result}, "/");
  }

  cancel_modal(){
    return this.modlCtrl.dismiss("canceled action", "cancel");
  }
}
