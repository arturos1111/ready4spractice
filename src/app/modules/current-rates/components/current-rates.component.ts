import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrencyRates } from 'src/app/core/services/http/currency-service/interfaces/currency';
import { CurrentRatesService } from '../services/current-rates.service';

@Component({
  selector: 'app-current-rates',
  templateUrl: './current-rates.component.html',
  styleUrls: ['./current-rates.component.scss'],
  providers: [CurrentRatesService],
})
export class CurrentRatesComponent implements OnInit {
  date: Date = new Date();
  currency: string = 'PLN';
  currentRate$: Observable<CurrencyRates>;
  constructor(private currentRatesService: CurrentRatesService) {}

  ngOnInit(): void {
    this.currentRate$ = this.currentRatesService.getRatesByCurrency(
      this.currency
    );
  }
}
