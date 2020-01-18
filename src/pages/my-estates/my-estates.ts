import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';
import { IStoredEstate } from '../../providers/storage/stored-estate';
import { EstateHomePage, LocationsPage } from '../../pages/pages';

/**
 * Generated class for the MyEstatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-estates',
  templateUrl: 'my-estates.html',
})
export class MyEstatesPage {

  private title: String = 'Royal Estates';
  private pageSubtitle: String = 'My Estates';
  private savedEstates: IStoredEstate[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storageService: StorageProvider
  ) {
  }

  ionViewWillEnter() {
    this.storageService.getAllEstates().then(estates => {
      this.savedEstates = estates;
    });
  }

  ionViewDidLoad() {
  }

  toEstate(estate: IStoredEstate) {
    this.navCtrl.push(EstateHomePage, {
      location: estate.location,
      estate: estate.estate
    });
  }

  toLocationsPage() {
    this.navCtrl.push(LocationsPage);
  }
}
