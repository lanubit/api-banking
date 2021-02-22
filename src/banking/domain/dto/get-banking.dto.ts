import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { GetCurrencyDto } from './get-currency.dto';
import { GetAtmDto } from './get-atm.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class GetBankingDto {
  @ApiModelProperty({
    type: GetAtmDto,
    description: 'Atm dto object',
  })
  @ValidateNested()
  @IsObject()
  @Type(() => GetAtmDto)
  atm: GetAtmDto;

  @ApiProperty({
    type: GetCurrencyDto,
    description: 'Currency dto obect',
  })
  @ValidateNested()
  @IsObject()
  @Type(() => GetCurrencyDto)
  currency: GetCurrencyDto;
}
