import { Injectable } from '@nestjs/common';
import { AtmService } from './atm.service';
import { CurrencyService } from './currency.service';
import { GetAtmDto } from '../../dto/get-atm.dto';
import { GetCurrencyDto } from '../../dto/get-currency.dto';

@Injectable()
export class BankingService {
  constructor(
    private readonly atmService: AtmService,
    private readonly currencyService: CurrencyService
  ) {}

  async getBanking(atmDto: GetAtmDto, currencyDto: GetCurrencyDto) {
    const atmResult = await this.atmService.getMany(atmDto);
    const currencyResult = await this.currencyService.getCurrency(currencyDto);
    return {
      currency: currencyResult,
      atm: atmResult
    };
  }
}
