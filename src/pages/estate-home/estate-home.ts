import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstateOverviewPage, EstateMapPage, SimilarEstatesPage } from '../pages'

/**
 * Generated class for the EstateHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate-home',
  templateUrl: 'estate-home.html',
})
export class EstateHomePage {

  private estateData: Object;

  private overviewPage;
  private similarEstatesPage;
  private mapPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estateData = this.navParams.data;

    this.overviewPage = EstateOverviewPage;
    this.mapPage = EstateMapPage;
    this.similarEstatesPage = SimilarEstatesPage;
  }

  ionViewDidLoad() {
  }

  goHome() {
    this.navCtrl.popToRoot();
  }
}
