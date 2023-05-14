import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-age',
  templateUrl: './age.page.html',
  styleUrls: ['./age.page.scss'],
})
export class AgePage implements OnInit {

  condition:any ;
  textShow= "";
  textexample= "how";
  

  constructor(private activatedRoute: ActivatedRoute) { 
    this.condition = this.activatedRoute.snapshot.paramMap.get('isOld');
    if(this.condition>=18){
      this.textShow = "Welcome to the APP";
    }
    else{
      this.textShow = "Must Be 18+ to enter ";
    }
  }
  

  ngOnInit() {
  }

}
