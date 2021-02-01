import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRestService } from 'src/app/core/services/http/currency.service.ts/currency.service';
import { CurrencyRates } from 'src/app/core/services/http/currency.service.ts/interfaces/currency';

@Injectable()
export class CurrentRatesService {
  constructor(private currencyRestService: CurrencyRestService) {}

  getRatesByCurrency(inputCurrency: string): Observable<CurrencyRates> {
    return this.currencyRestService.getCurrentExchangeRatesByCurrency(
      inputCurrency
    );
  }
}
