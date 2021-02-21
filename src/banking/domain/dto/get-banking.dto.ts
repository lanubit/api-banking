import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCurrencyDto } from './get-currency.dto';
import { GetAtmDto } from './get-atm.dto';

export class GetBankingDto {
  @ValidateNested()
  @IsObject()
  @Type(() => GetAtmDto)
  atm: GetAtmDto

  @ValidateNested()
  @IsObject()
  @Type(() => GetCurrencyDto)
  currency: GetCurrencyDto
}