import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_ACCURACY } from '../util/constant/atm.constant';
import { ApiProperty } from '@nestjs/swagger';

export class GetCurrencyDto {
  @ApiProperty({
    type: String,
    description: 'from',
    default: 'PEN',
  })
  @IsString()
  from: string;

  @ApiProperty({
    type: String,
    description: 'to',
    default: 'EUR',
  })
  @IsString()
  to: string;

  @ApiProperty({
    type: Number,
    description: 'amount',
    default: 1,
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  amount: number = DEFAULT_ACCURACY;
}