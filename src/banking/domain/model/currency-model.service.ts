import { Injectable } from '@nestjs/common';
import { CurrencyEntity } from '../entity/currency.entity';
import { CurrencyServiceRepository } from '../../infrastructure/repository/service/currency.service.repository';

@Injectable()
export class CurrencyModel {
  constructor(
    private readonly currencyServiceRepository: CurrencyServiceRepository
  ) {}
  async getCurrency(from: string, to: string, amount: number): Promise<CurrencyEntity> {
    return this.currencyServiceRepository.exchangeRate(from, to, amount);
  }
}
