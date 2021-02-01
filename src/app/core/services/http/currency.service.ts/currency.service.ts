import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_URL } from 'src/app/core/consts/urls';
import { Observable } from 'rxjs';
import { CurrencyRates } from './interfaces/currency';

@Injectable({ providedIn: 'root' })
export class CurrencyRestService {
  private apiUrl: string = API_URL;
  constructor(private http: HttpClient) {}

  getCurrentExchangeRatesByCurrency(
    inputCurrency: string
  ): Observable<CurrencyRates> {
    let params = new HttpParams();
    params = params.append('symbols', inputCurrency);
    return this.http.get<CurrencyRates>(
      'https://api.exchangeratesapi.io/latest',
      { params }
    );
  }
}
