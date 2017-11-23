import { Address } from './address';
import { Company } from './company';
import { Geo } from './geo';


export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  address: Address;
  geo: Geo;
  company: Company;
}