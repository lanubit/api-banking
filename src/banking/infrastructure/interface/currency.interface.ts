import { CurrencyEntity } from '../../domain/entity/currency.entity';

export interface CurrencyInterface {
  exchangeRate(
    from: string,
    to: string,
    amount: number,
  ): Promise<CurrencyEntity>;
}
