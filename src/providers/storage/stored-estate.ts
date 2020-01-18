import { ILocation } from '../estates/location';
import { IEstate } from '../estates/estate';

export interface IStoredEstate {
    estate: IEstate;
    location: ILocation;
}