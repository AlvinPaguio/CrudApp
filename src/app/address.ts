import { Geo } from './models/geo.model';

export class Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  lat: string;
  lng: string;
  geo: Geo;
}