import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CurrentRatesService } from 'src/app/core/services/currency-rates.service';
import { SubSink } from 'subsink';

export interface CarouselItem {
  img: string;
  currency: string;
  currencyRate: number;
}
@Component({
  selector: 'app-rates-carousel',
  templateUrl: './rates-carousel.component.html',
  styleUrls: ['./rates-carousel.component.scss'],
  providers: [NgbCarouselConfig, CurrentRatesService],
})
export class RatesCarouselComponent implements OnInit, OnDestroy {
  images = [1000, 1100, 1200].map((n) => `https://placekitten.com/g/${n}/500`);
  items: CarouselItem[] = [];
  private subsink: SubSink = new SubSink();
  private EUR_PLN: number = 0;
  private USD_GPB: number = 0;
  private CAD_CHF: number = 0;

  constructor(
    config: NgbCarouselConfig,
    private currentRatesService: CurrentRatesService
  ) {
    config.interval = 1000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    this.items = [
      {
        img: this.images[0],
        currency: 'EUR --> PLN',
        currencyRate: this.EUR_PLN,
      },
      {
        img: this.images[1],
        currency: 'USD --> GBP',
        currencyRate: this.USD_GPB,
      },
      {
        img: this.images[2],
        currency: 'CAD --> CHF',
        currencyRate: this.CAD_CHF,
      },
    ];
    this.getActualRates();
  }

  getEvent(event: any) {
    if (event) this.getActualRates();
  }

  private getActualRates() {
    this.subsink.sink = this.currentRatesService
      .getRatesByCurrencies('PLN')
      .subscribe((res) => {
        this.items[0].currencyRate = res.rates.PLN;
      });
    this.subsink.sink = this.currentRatesService
      .getRatesByCurrencies('USD', 'GBP')
      .subscribe((res) => {
        this.items[1].currencyRate = res.rates.GBP;
      });
    this.subsink.sink = this.currentRatesService
      .getRatesByCurrencies('CAD', 'CHF')
      .subscribe((res) => {
        this.items[2].currencyRate = res.rates.CHF;
      });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
