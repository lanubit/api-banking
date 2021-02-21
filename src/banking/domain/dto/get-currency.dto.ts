import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_ACCURACY } from '../util/constant/atm.constant';

export class GetCurrencyDto{
  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  amount: number = DEFAULT_ACCURACY;
}