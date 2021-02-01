import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CURRENCY_API_URL } from 'src/app/core/consts/urls';
import { Observable } from 'rxjs';
import { CurrencyRates } from './interfaces/currency';

@Injectable({ providedIn: 'root' })
export class CurrencyRestService {
  private apiUrl: string = CURRENCY_API_URL;
  constructor(private http: HttpClient) {}

  getCurrentExchangeRatesByCurrency(
    inputCurrency: string
  ): Observable<CurrencyRates> {
    let params = new HttpParams();
    params = params.append('symbols', inputCurrency);
    return this.http.get<CurrencyRates>(this.apiUrl, { params });
  }
}
