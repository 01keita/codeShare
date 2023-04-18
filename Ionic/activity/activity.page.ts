import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {

  constructor() { }
  expand = "block";
  shape ="round";
  fill ="clear";
  size="small";
  color="default";
  ngOnInit() {
  }

    expandFull(){
      if(this.expand=="block"){
      this.expand = "default";
      }
      else{
        this.expand = "block";
      }
    }

    shapeRound(){
      if(this.shape=="round"){
        this.shape = "default";
      }
      else{
        this.shape = "round";
      }
    }

    fill_2(){
      if(this.fill=="clear"){
        this.fill= "outline";
      }
      else if(this.fill=="outline" ){
        this.fill = "solid";
      }
      else{
        this.fill = "clear";
      }
    }

    size_2(){
      if(this.size=="small"){
        this.size="default";
      }
      else if(this.size=="default"){
        this.size="large";
      }
      else {
        this.size="small";
      }
    }

    color_2(){
      if(this.color=="default"){
        this.color="secondary";
      }
      else if(this.color=="secondary"){
        this.color="tertiary";
      }
      else if(this.color=="tertiary"){
        this.color="danger";
      }


      else if(this.color=="danger"){
        this.color="warning";
      }
      else if(this.color=="warning"){
        this.color="success";
      }
      else if(this.color=="success"){
        this.color="light";
      }


      else if(this.color=="light"){
        this.color="medium";
      }
      else if(this.color=="medium"){
        this.color="dark";
      }
      else if(this.color=="dark"){
        this.color="default";
      }
    }
    
}
