import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { EstatesProvider } from '../../providers/estates/estates';
import { EstateHomePage } from '../pages';
import { IEstate } from '../../providers/estates/estate';
import { ILocation } from '../../providers/estates/location';
import * as _ from "lodash";

/**
 * Generated class for the EstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estates',
  templateUrl: 'estates.html',
})
export class EstatesPage {

  private location: ILocation;
  private regions: Array<String>;
  private estatesByRegion: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public estatesService: EstatesProvider
  ) {
  }

  ionViewDidLoad() {
    let location: ILocation = this.navParams.data;
    let loadingInstance = this.loadingCtrl.create({
      content: "Fetching estates for location '" + location.name + "'..."
    });
    loadingInstance
      .present()
      .then(() => {
        this.estatesService.getEstates(location.id).subscribe(estates => {
          this.location = location;
          this.regions = _.uniq(_.map(estates, estate => estate.region));
          this.estatesByRegion = _.groupBy(estates, 'region');
          loadingInstance.dismiss();
        });
      });
  }

  toEstate(estate: IEstate) {
    this.navCtrl.push(EstateHomePage, {
      location: this.location,
      estate: estate
    });
  }

}
