import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { IEstate } from '../estates/estate';
import * as _ from "lodash";

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  private readonly storageKey = "estates";

  constructor(public storage: Storage) {
  }

  addEstate(estate: IEstate): void {
    this.storage.ready().then(() => {
      this.storage.get(this.storageKey).then(estates => {
          estates = estates || {};
          estates[estate.id] = estate;
          this.storage.set(this.storageKey, estates);
        })
      .catch(Promise.resolve(false))
    });
  }

  getAllEstates(): Promise<IEstate[]> {
    return this.storage.ready()
      .then(() => {
        return this.storage.get(this.storageKey)
          .then(estates => _.values(estates || {}))
          .catch(() => []);
      });
  }

  isSaved(estate: IEstate): Promise<boolean> {
    return this.getAllEstates()
      .then(Promise.resolve(estates => { console.log(estate.id in estates); console.log(estates); return estate.id in estates; }))
      .catch(Promise.resolve(false));
  }

}
