import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CURRENCY_API_URL, HISTORICAL_API_URL } from 'src/app/core/consts/urls';
import { Observable } from 'rxjs';
import { CurrencyRates } from './interfaces/currency';

@Injectable({ providedIn: 'root' })
export class CurrencyRestService {
  private currentApiUrl: string = CURRENCY_API_URL;
  private historicalApiUrl: string = HISTORICAL_API_URL;
  constructor(private http: HttpClient) {}

  getCurrentExchangeRatesByCurrency(
    inputCurrency: string
  ): Observable<CurrencyRates> {
    let params = new HttpParams();
    params = params.append('symbols', inputCurrency);
    return this.http.get<CurrencyRates>(this.currentApiUrl, { params });
  }

  getHistoricalRatesForCurrency(
    startAt: string,
    endAt: string,
    base: string
  ): Observable<CurrencyRates> {
    let params = new HttpParams();
    params = params.append('start_at', startAt);
    params = params.append('end_at', endAt);
    params = params.append('base', base);

    return this.http.get<CurrencyRates>(this.historicalApiUrl, { params });
  }

  getCurrentExchangeRatesByCurrencies(
    currency1: string,
    currency2?: string
  ): Observable<CurrencyRates> {
    let params = new HttpParams();
    if (currency1 === 'PLN') {
      params = params.append('symbols', `${currency1}`);
    } else {
      params = params.append('symbols', `${currency1},${currency2}`);
    }
    return this.http.get<CurrencyRates>(this.currentApiUrl, { params });
  }
}
