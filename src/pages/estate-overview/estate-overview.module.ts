import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstateOverviewPage } from './estate-overview';

@NgModule({
  declarations: [
    EstateOverviewPage,
  ],
  imports: [
    IonicPageModule.forChild(EstateOverviewPage),
  ],
})
export class EstateOverviewPageModule {}
