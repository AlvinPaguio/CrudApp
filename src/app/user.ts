import { Address } from './address';
import { Company } from './company';


export class User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  username: string;
  address: Address;
  company: Company;
}