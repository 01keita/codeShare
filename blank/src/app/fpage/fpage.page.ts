import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-fpage',
  templateUrl: './fpage.page.html',
  styleUrls: ['./fpage.page.scss'],
})
export class FpagePage implements OnInit {
  alertButtons = ['OK'];
  pageNo = "0";
  constructor(private router: Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert Input!',
      subHeader: 'Important message',
      message: 'Check Input Number!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  navigate(){
  if(parseInt(this.pageNo) >= 2 && parseInt(this.pageNo) <= 3 ){
    if(this.pageNo=="2"){
      this.router.navigate(['/spage'])
    }
    if(this.pageNo=="3"){
      this.router.navigate(['/tpage'])
    }
  }
  else {
    this.presentAlert();
  }
  }
}
