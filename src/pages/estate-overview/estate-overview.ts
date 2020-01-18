import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { EstatesProvider } from '../../providers/estates/estates';
import { StorageProvider } from '../../providers/storage/storage';
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
  private isSaved: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public estatesService: EstatesProvider,
    public storageService: StorageProvider
  ) {
    this.estate = this.navParams.data.estate;
    this.location = this.navParams.data.location;
  }

  ionViewDidLoad() {
    this.storageService.isSaved(this.estate).then(isSaved => this.isSaved = isSaved);
  }

  doRefresh(refresher) {
    this.estatesService.getEstates(this.location.id).subscribe(estates => {
      this.estate = _.first(_.filter(estates, estate => estate.id === this.estate.id));
      refresher.complete();
    })
  }

  saveEstate(): void {
    this.storageService.addEstate(this.estate, this.location).then(() => this.isSaved = true);
  }

  removeEstate(): void {
    this.alertCtrl.create({
      title: 'Remove Estate',
      message: 'Are you sure you want to remove from saved estates?',
      buttons: [{
        text: 'No',
        role: 'cancel',
        handler: () => {}
      }, {
        text: 'Yes',
        handler: () =>  {
          this.storageService.removeEstate(this.estate).then(() => {
            this.isSaved = false;
            this.showSuccessfulEstateRemovalToast();
          })
        }
      }]
    }).present();
  }

  private showSuccessfulEstateRemovalToast(): void {
    this.toastCtrl.create({
      message: 'Estate was removed successfully!',
      duration: 2000,
      position: 'bottom'
    }).present();
  }
}
