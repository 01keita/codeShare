import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  id2: any;
  age: any;
  isOld: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private alertController: AlertController) { 
    this.id2 = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert Input!',
      subHeader: 'Important message',
      message: 'No Age Input!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  ageRed(){
    if(this.age!=null){
      if(this.age>=18){
        this.isOld = this.age;
        this.router.navigate(['age/' + this.isOld ])
      }
      else{
        this.isOld = this.age;
        this.router.navigate(['age/' + this.isOld])
      }
      
    } else {
      this.presentAlert();
    }
  }

}
