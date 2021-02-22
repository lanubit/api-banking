import { Injectable } from '@nestjs/common';
import { GetAtmDto } from '../../dto/get-atm.dto';
import { AtmModel } from '../../model/atm.model';

@Injectable()
export class AtmService {
  constructor(private readonly atmModel: AtmModel) {}

  async getMany(atmDto: GetAtmDto) {
    const atmResult = await this.atmModel.searchAtmNear(
      atmDto.lat,
      atmDto.lon,
      atmDto.accuracy,
    );
    return atmResult;
  }
}
