import { Injectable } from '@nestjs/common';
import { CurrencyModel } from '../../model/currency-model.service';
import { GetCurrencyDto } from '../../dto/get-currency.dto';

@Injectable()
export class CurrencyService {
  constructor(
    private readonly currencyModel: CurrencyModel
  ) {}

  async getCurrency(currencyDto: GetCurrencyDto) {
    return this.currencyModel.getCurrency(
      currencyDto.from,
      currencyDto.to,
      currencyDto.amount
    );
  }
}
