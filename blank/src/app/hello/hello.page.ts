import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.page.html',
  styleUrls: ['./hello.page.scss'],
})
export class HelloPage implements OnInit {
  name:any;
  id:any;
  constructor(private router: Router, private alertController: AlertController) { }
  
  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert Input!',
      subHeader: 'Important message',
      message: 'No Name Input!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  redirect(id:any){

      if(this.name!=null){
        this.id= this.name;
        this.router.navigate(['welcome/' + id])
      } else {
        this.presentAlert();
      }
  }
} 
