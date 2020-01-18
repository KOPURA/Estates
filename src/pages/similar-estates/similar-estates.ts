import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { IEstate } from '../../providers/estates/estate';
import { ILocation } from '../../providers/estates/location';
import { EstatesProvider } from '../../providers/estates/estates';
import { EstateHomePage } from '../../pages/pages';
import * as _ from "lodash";

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

  private readonly types: Array<String> = ['Apartment', 'House', 'Studio'];

  private estate: IEstate;
  private location: ILocation;
  private region: string;
  private allRegions: Array<string>;

  private filteredRegions: Array<string>;
  private estatesByRegion: object;

  private _estates: IEstate[] = [];

  private selectedType: string;
  private filteringEnabled: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public estatesService: EstatesProvider
  )
  {
    this.estate = navParams.data.estate;
    this.location = navParams.data.location;

    this.region = "all";
    this.selectedType = 'Apartment';
    this.filteringEnabled = false;
  }

  get estates(): IEstate[] {
    let estates = this.getFilteredEstates(this.region);
    if (this.filteringEnabled) {
      estates = _.filter(estates, e => e.type === this.selectedType);
    }
    return estates;
  }

  set estates(estates: IEstate[]) {
    this._estates = estates;
  }

  ionViewDidLoad(): void {
    let loadingInstance = this.loadingCtrl.create({content: "Fetching similar estates..."})
    loadingInstance
      .present()
      .then(() => {
        this.estatesService.getEstates(this.location.id).subscribe(estates => {
            this.estates = estates;

            this.allRegions = _.uniq(_.map(estates, estate => estate.region));

            loadingInstance.dismiss();
          });
      });
  }

  private calculateHeader(record, recordIndex, records): any {
    if (recordIndex == 0 || (record.region !== records[recordIndex -1].region)) {
      return record.region;
    }
    return null;
  }

  private getFilteredEstates(region: string): IEstate[] {
    return region === 'all'
      ? this._estates
      : _.filter(this._estates, e => e.region === this.estate.region);
  }

  private toEstate(estate: IEstate): void {
    this.navCtrl.push(EstateHomePage, {
      location: this.location,
      estate: estate
    });
  }
}
