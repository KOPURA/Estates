import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EstatesProvider } from '../../providers/estates/estates';
import { ILocation } from '../../providers/estates/location';
import { EstatesPage } from '../pages';

/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-locations',
  templateUrl: 'locations.html',
})
export class LocationsPage {

  private locations: Array<ILocation>;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public loadingCtrl: LoadingController,
      public estatesService: EstatesProvider
  ){
  }

  ionViewDidLoad() {
    let loadingInstance = this.loadingCtrl.create({content: "Fetching locations..."})
    loadingInstance
      .present()
      .then(() => {
        this.estatesService.getLocations().subscribe(locations => {
          this.locations = locations;
          loadingInstance.dismiss();
        });
      });
  }

  openLocation(location: ILocation) {
    this.navCtrl.push(EstatesPage, location);
  }

}
