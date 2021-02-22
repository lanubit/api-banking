import { GeolocationEntity } from './geolocation.entity';

export interface AddressEntity {
  street: string;
  housenumber: string;
  postalcode: string;
  city: string;
  geoLocation: GeolocationEntity;
}
