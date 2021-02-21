import { HttpModule, Module } from '@nestjs/common';
import { BankingController } from './banking/application/banking.controller';
import { AtmService } from './banking/domain/application/service/atm.service';
import { AtmModel } from './banking/domain/model/atm.model';
import { AtmServiceRepository } from './banking/infrastructure/repository/service/atm.service.repository';
import { CurrencyModel } from './banking/domain/model/currency-model.service';
import { CurrencyServiceRepository } from './banking/infrastructure/repository/service/currency.service.repository';
import { HttpNestAdapter } from './banking/infrastructure/adapter/http.nest.adapter';
import { BankingService } from './banking/domain/application/service/banking.service';
import { CurrencyService } from './banking/domain/application/service/currency.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [BankingController],
  providers: [
    AtmService,
    AtmModel,
    AtmServiceRepository,
    CurrencyModel,
    CurrencyServiceRepository,
    HttpNestAdapter,
    BankingService,
    CurrencyService
  ],
})
export class AppModule {}
