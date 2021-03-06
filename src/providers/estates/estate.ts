import { ILocation } from './location'

export interface IEstate {
    id: number;
    refNumber: string;
    region: string;
    type: string;
    bedrooms: number;
    area: number;
    price: number;
    image: string;
    address: string;
    latitude: number;
    longitude: number;
}