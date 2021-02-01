import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CurrencyRestService } from 'src/app/core/services/http/currency-service/currency.service';
import { CurrencyRates } from 'src/app/core/services/http/currency-service/interfaces/currency';
import { map } from 'rxjs/operators';

@Injectable()
export class CurrentRatesService {
  constructor(private currencyRestService: CurrencyRestService) {}

  getRatesByCurrency(inputCurrency: string): Observable<CurrencyRates> {
    return this.currencyRestService.getCurrentExchangeRatesByCurrency(
      inputCurrency
    );
  }

  getRatesByCurrencies(
    currency1: string,
    currency2?: string
  ): Observable<CurrencyRates> {
    return this.currencyRestService.getCurrentExchangeRatesByCurrencies(
      currency1,
      currency2
    );
  }

  getHistoricalRates(
    startsAt: string,
    endsAt: string,
    base: string
  ): Observable<CurrencyRates> {
    return this.currencyRestService.getHistoricalRatesForCurrency(
      startsAt,
      endsAt,
      base
    );
  }

  getHistoricalRatesForCurrency(
    startsAt: string,
    endsAt: string,
    currency: string
  ): Observable<CurrencyRates> {
    return this.getHistoricalRates(startsAt, endsAt, currency);
  }
}
