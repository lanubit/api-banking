import { AddressEntity } from './address.entity';
import { OpeningHoursEntity } from './opening-hours.entity';

export interface AtmEntity {
  address: AddressEntity,
  distance: number,
  openingHours: OpeningHoursEntity[],
  functionality: string,
  type: string,
}