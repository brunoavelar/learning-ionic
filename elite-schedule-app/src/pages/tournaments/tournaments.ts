import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  constructor(public nav: NavController, public navParams: NavParams) {
  }

  itemTapped(){
    this.nav.push(TeamsPage)
  }
}
