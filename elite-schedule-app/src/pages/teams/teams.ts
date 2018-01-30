import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamDetailPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  itemTapped(){
    this.nav.push(TeamDetailPage)
  }
}
