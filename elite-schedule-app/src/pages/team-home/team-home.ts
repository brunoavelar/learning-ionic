import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage, StandingsPage } from '../pages';
import { MyTeamsPage } from '../my-teams/my-teams';

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {
  team:any;

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;
  
  constructor(public nav:NavController, public navParams:NavParams) {
    this.team = this.navParams.data;
  }

  goHome(){
    //this.nav.push(MyTeamsPage);
    this.nav.popToRoot();
  }
}
