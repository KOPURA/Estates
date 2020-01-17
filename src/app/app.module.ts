import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http'

import { AgmCoreModule } from '@agm/core';

import { MyApp } from './app.component';
import { EstatesProvider } from '../providers/estates/estates';
import {
  MyEstatesPage,
  LocationsPage,
  EstatesPage,
  EstateHomePage,
  EstateOverviewPage,
  EstateMapPage,
  SimilarEstatesPage
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstatesPage,
    EstateHomePage,
    EstateOverviewPage,
    EstateMapPage,
    SimilarEstatesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyApDyHfVZbbCjO0O1nf_pgv4YZf8RVqfmA'
    }),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyEstatesPage,
    LocationsPage,
    EstatesPage,
    EstateHomePage,
    EstateOverviewPage,
    EstateMapPage,
    SimilarEstatesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EstatesProvider
  ]
})
export class AppModule {}
