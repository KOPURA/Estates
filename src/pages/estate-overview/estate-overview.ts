import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstatesProvider } from '../../providers/estates/estates';
import { IEstate } from '../../providers/estates/estate';
import { ILocation } from '../../providers/estates/location';
import * as _ from "lodash";

/**
 * Generated class for the EstateOverviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate-overview',
  templateUrl: 'estate-overview.html',
})
export class EstateOverviewPage {

  private location: ILocation;
  private estate: IEstate;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public estatesService: EstatesProvider
  ) {
    this.estate = this.navParams.data.estate;
    this.location = this.navParams.data.location;
  }

  ionViewDidLoad() {
  }

  doRefresh(refresher) {
    this.estatesService.getEstates(this.location.id).subscribe(estates => {
      this.estate = _.first(_.filter(estates, estate => estate.id === this.estate.id));
      refresher.complete();
    })
  }
}
