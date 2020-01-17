import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILocation } from './location'
import { IEstate } from './estate';

import { Observable } from 'rxjs/Rx';
import { catchError, map } from 'rxjs/operators';

/*
  Generated class for the EstatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EstatesProvider {

  private baseApiUrl: String = "https://royal-estates-2e75e.firebaseio.com"

  constructor(public http: HttpClient) {
  }

  getLocations(): Observable<ILocation[]> {
    return this.http.get<ILocation[]>(this.baseApiUrl + "/locations.json").pipe(
        catchError(this.handleHttpError)
      );
  }

  getEstates(locationId: string): Observable<IEstate[]> {
    return this.http.get<Object>(this.baseApiUrl + "/locations-data.json").pipe(
      map((response: any) => {
        if (!(locationId in response)) {
          throw new Error("Unknown location id " + locationId);
        }
        return response[locationId].estates;
      }),
      catchError(this.handleHttpError)
     );
  }

  private handleHttpError(e: HttpErrorResponse) {
    console.error(e);
    return Observable.throw(new Error("Failed to fetch estates info: " + e.message));
  }
}
