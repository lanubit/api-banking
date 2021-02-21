import { Controller, Get, Query, Res } from '@nestjs/common';
import { GetBankingDto } from '../domain/dto/get-banking.dto';
import { BankingService } from '../domain/application/service/banking.service';
import { Response } from 'express';
import { CustomResponse } from './response/custom.response';
import { SUCCESS_CODE, SUCCESS_MESSAGE } from '../domain/util/constant/response.constant';

@Controller('banking')
export class BankingController {
  constructor(
    private readonly bankingService: BankingService
  ) {}

  @Get()
  async getMany(
    @Query() getBanking: GetBankingDto,
    @Res() res: Response
  ) {
    const banking = await this.bankingService.getBanking(
      getBanking.atm,
      getBanking.currency
    );
    const response = new CustomResponse(SUCCESS_MESSAGE, banking);
    return res.json(response).status(SUCCESS_CODE);
  }
}
