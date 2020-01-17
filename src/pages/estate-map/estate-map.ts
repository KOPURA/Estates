import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IEstate } from '../../providers/estates/estate';

import { AgmMap } from '@agm/core';
/**
 * Generated class for the EstateMapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-estate-map',
  templateUrl: 'estate-map.html',
})
export class EstateMapPage {

  @ViewChild(AgmMap)
  public agmMap: AgmMap

  private estate: IEstate;
  private zoom:number = 18;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estate = navParams.data.estate;
  }

  ionViewDidLoad() {

  }

  startNavigation() {
    console.log("Starting navigation...");
  }

}
