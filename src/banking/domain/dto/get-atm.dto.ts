import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { DEFAULT_ACCURACY } from '../util/constant/atm.constant';
import { ApiProperty } from '@nestjs/swagger';

export class GetAtmDto {
  @ApiProperty({
    type: String,
    description: 'Latitude',
    default: '51.879227',
  })
  @IsString()
  lat: string;

  @ApiProperty({
    type: String,
    description: 'longitude',
    default: '5.837548',
  })
  @IsString()
  lon: string;

  @ApiProperty({
    type: Number,
    description: 'accuracy',
    default: 14,
  })
  @IsOptional()
  @IsNumber()
  @Transform(({ value }) => Number(value), { toClassOnly: true })
  accuracy: number = DEFAULT_ACCURACY;
}
