import { AtmEntity } from '../../domain/entity/atm.entity';

export interface AtmInterface {
  searchAtmNear(lat: string, lon: string, accuracy: number): Promise<AtmEntity[]>;
}