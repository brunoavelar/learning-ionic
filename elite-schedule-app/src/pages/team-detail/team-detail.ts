import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {
  
  team:any;

  constructor(public nav: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log(this.team);
    
  }

  ionViewDidLoad() {
    
  }

}
