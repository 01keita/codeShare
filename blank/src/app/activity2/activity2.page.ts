import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity2',
  templateUrl: './activity2.page.html',
  styleUrls: ['./activity2.page.scss'],
})
export class Activity2Page implements OnInit {
  no1 = "0";
  No2= "0";
  Result = 0;
  constructor() { }

  ngOnInit() {
  }


  add(){
    this.Result = parseInt(this.no1) + parseInt(this.No2);
  }
  sub(){
    this.Result = parseInt(this.no1) - parseInt(this.No2);
  }
  mult(){
    this.Result = parseInt(this.no1) * parseInt(this.No2);
  }
  div(){
    this.Result = parseInt(this.no1) / parseInt(this.No2);
  }
}
