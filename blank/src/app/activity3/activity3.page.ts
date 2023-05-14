import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-activity3',
  templateUrl: './activity3.page.html',
  styleUrls: ['./activity3.page.scss'],
})
export class Activity3Page implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }

  no1 = "0";
  No2= "0";
  result=0;
  ngOnInit() {
    
  }


  async presentActionSheet(){
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example Header',
      subHeader: 'Example subheader',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'Add',
          role: 'add',
          data:{
            action: "add"
          }
        },

        {
          text: 'Subtract',
          role: 'sub',
          data:{
            action: "sub"
          }
        },

        {
          text: 'Multiply',
          role: 'mult',
          data:{
            action: "mult"
          }
        },
        {
          text: 'Divide',
          role: 'div',
          data:{
            action: "div"
          }
        }
      ]
    })

    

    actionSheet.present();
    const result = await actionSheet.onDidDismiss();
    

    if(result.data.action=="add"){
      this.result = parseInt(this.no1) + parseInt(this.No2);
    }
    if(result.data.action=="sub"){
      this.result = parseInt(this.no1) - parseInt(this.No2);
    }
    if(result.data.action=="mult"){
      this.result = parseInt(this.no1) * parseInt(this.No2);
    }
    if(result.data.action=="div"){
      this.result = parseInt(this.no1) / parseInt(this.No2);
    }
    console.log(this.result);
  }
}
