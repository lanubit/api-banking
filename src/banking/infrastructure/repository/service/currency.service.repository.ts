import { CurrencyInterface } from '../../interface/currency.interface';
import { CurrencyEntity } from '../../../domain/entity/currency.entity';
import { Injectable } from '@nestjs/common';
import { HttpNestAdapter } from '../../adapter/http.nest.adapter';

@Injectable()
export class CurrencyServiceRepository implements CurrencyInterface {

  private readonly baseUrl = 'https://v6.exchangerate-api.com/v6/';
  private readonly exchangeUrl = '/7b1c1f74f53c87872de9dffb/pair/';

  constructor(
    private readonly httpNestAdapter: HttpNestAdapter
  ) {}

  async exchangeRate(from: string, to: string, amount: number): Promise<CurrencyEntity> {
    const path = `${this.exchangeUrl}${from}/${to}/${amount}`;
    const retResult = await this.httpNestAdapter.get(this.baseUrl + path);
    const result: CurrencyEntity = await this.formatCurrencyEntity(retResult);
    return result;
  }

  async formatCurrencyEntity(response: object): Promise<CurrencyEntity> {
    const payload: CurrencyEntity = {
      success: (Object.keys(response)).includes('result') ? response['result'] === 'success' : false,
      terms: response['terms_of_use'],
      from: response['base_code'],
      to: response['target_code'],
      rate: response['conversion_rate'],
      result: response['conversion_result'],
    }
    return payload;
  }
}