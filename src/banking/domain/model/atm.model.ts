import { Injectable } from '@nestjs/common';
import { AtmEntity } from '../entity/atm.entity';
import { AtmServiceRepository } from '../../infrastructure/repository/service/atm.service.repository';

@Injectable()
export class AtmModel {
  constructor(private readonly atmServiceRepository: AtmServiceRepository) {}

  async searchAtmNear(
    lat: string,
    lon: string,
    accuracy: number,
  ): Promise<AtmEntity[]> {
    return await this.atmServiceRepository.searchAtmNear(lat, lon, accuracy);
  }
}
