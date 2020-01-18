import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { IEstate } from '../estates/estate';
import { ILocation } from '../estates/location';
import { IStoredEstate } from './stored-estate';
import * as _ from "lodash";

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  private readonly storageKey = "estates";

  constructor(
    public storage: Storage,
    public events: Events) {
  }

  addEstate(estate: IEstate, location: ILocation): Promise<boolean> {
    return this.getEstatesAsMap().then(estates => {
        estates[estate.id] = { estate: estate, location: location };
        return this.saveEstates(estates);
    });
  }

  getAllEstates(): Promise<IStoredEstate[]> {
    return this.getEstatesAsMap().then(estates => {
      return Promise.resolve(_.values(estates || {}));
    });
  }

  isSaved(estate: IEstate): Promise<boolean> {
    return this.getEstatesAsMap()
      .then(estates => Promise.resolve(estate.id in estates))
      .catch(error => Promise.resolve(false));
  }

  removeEstate(estate: IEstate): Promise<boolean> {
    return this.getEstatesAsMap().then(estates => {
      delete estates[estate.id];
      return this.saveEstates(estates);
    });
  }

  private saveEstates(estates: Object): Promise<boolean> {
    return this.storage.set(this.storageKey, estates)
      .then(success => this.events.publish('estates:changed', _.values(estates || {})))
      .then(success => Promise.resolve(true))
      .catch(error => Promise.resolve(false));
  }

  private getEstatesAsMap(): Promise<Object> {
    return this.storage.ready()
      .then(() => {
        return this.storage.get(this.storageKey)
          .then(estates => Promise.resolve(estates || {}))
          .catch(error => Promise.resolve({}));
      });
  }
}
