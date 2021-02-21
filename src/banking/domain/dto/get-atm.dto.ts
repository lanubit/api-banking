import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_ACCURACY } from '../util/constant/atm.constant';

export class GetAtmDto {
  @IsString()
  lat: string;

  @IsString()
  lon: string;

  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  accuracy: number = DEFAULT_ACCURACY;
}
