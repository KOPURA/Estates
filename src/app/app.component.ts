import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyEstatesPage, LocationsPage, EstateHomePage } from '../pages/pages';
import { IStoredEstate } from '../providers/storage/stored-estate';
import { StorageProvider } from '../providers/storage/storage';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = MyEstatesPage;

  @ViewChild(Nav)
  private nav: Nav;

  private storedEstates: IStoredEstate[] = [];

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public storageService: StorageProvider,
    public events: Events
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.loadStoredEstates();
      this.listenForStoredEventsChanges();

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toFindLocation() {
    this.nav.push(LocationsPage)
  }

  toStoredEstate(estate: IStoredEstate): void {
    this.nav.push(EstateHomePage, estate);
  }

  private listenForStoredEventsChanges() {
    this.events.subscribe('estates:changed', (estates: IStoredEstate[]) => {
      this.storedEstates = estates;
    });
  }

  private loadStoredEstates() {
    this.storageService.getAllEstates().then(estates => {
      this.storedEstates = estates;
    });
  }
}

