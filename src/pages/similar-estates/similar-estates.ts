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

  ionViewDidLoad(): void {
    let loadingInstance = this.loadingCtrl.create({content: "Fetching similar estates..."})
    loadingInstance
      .present()
      .then(() => {
        this.estatesService.getEstates(this.location.id).subscribe(estates => {
            this.estatesByRegion = _.groupBy(estates, 'region');

            this.allRegions = _.uniq(_.map(estates, estate => estate.region));
            this.filteredRegions = this.getFilteredRegions(this.region);

            loadingInstance.dismiss();
          });
      });
  }

  private segmentChanged(event): void  {
    this.filteredRegions = this.getFilteredRegions(this.region);
  }

  private getFilteredRegions(region: string): string[] {
    return region === 'all'
      ? this.allRegions
      : _.filter(this.allRegions, r => r === this.estate.region);
  }

  private shouldShowRegion(region: string): boolean {
    if (!this.filteringEnabled) {
      return true;
    }
    let filteredEstates = _.filter(this.estatesByRegion[region], e => e.type === this.selectedType);
    return filteredEstates.length > 0;
  }

  private toEstate(estate: IEstate): void {
    this.navCtrl.push(EstateHomePage, {
      location: this.location,
      estate: estate
    });
  }
}
