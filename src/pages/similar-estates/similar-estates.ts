import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { IEstate } from '../../providers/estates/estate';
import { ILocation } from '../../providers/estates/location';
import { EstatesProvider } from '../../providers/estates/estates';

/**
 * Generated class for the SimilarEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-similar-estates',
  templateUrl: 'similar-estates.html',
})
export class SimilarEstatesPage {

  private estate: IEstate;
  private location: ILocation;

  private estatesInSameLocation: IEstate[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public estatesService: EstatesProvider
  )
  {
    this.estate = navParams.data.estate;
    this.location = navParams.data.location;
  }

  ionViewDidLoad() {
    let loadingInstance = this.loadingCtrl.create({content: "Fetching similar estates..."})
    loadingInstance
      .present()
      .then(() => {
        this.estatesService.getEstates(this.location.id).subscribe(estates => {
            this.estatesInSameLocation = estates;
            loadingInstance.dismiss();
          });
      });
  }

  segmentChanged(event) {
    console.log(event.value);
  }
}
