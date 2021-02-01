import { DatePipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { element } from 'protractor';
import { CurrentRatesService } from 'src/app/core/services/currency-rates.service';
import { SubSink } from 'subsink';

export interface Series {
  name: string;
  value: number;
}

export interface RootGraph {
  name: string;
  series: Series[];
}

export interface RootObject {
  0: string;
  1: number;
}

@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  styleUrls: ['./historical-data.component.scss'],
  providers: [CurrentRatesService, DatePipe],
})
export class HistoricalDataComponent implements OnInit, OnDestroy {
  private subsink: SubSink = new SubSink();
  private startAt: Date = new Date('2011-01-01');
  private endAt: Date = new Date();
  private pipeTemplate: string = 'YYYY-MM-dd';
  private outputCurrency: string = 'EUR';

  data: RootGraph[] = [];

  constructor(
    private currentRatesService: CurrentRatesService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.subsink.sink = this.currentRatesService
      .getHistoricalRatesForCurrency(
        this.datePipe.transform(this.startAt, this.pipeTemplate),
        this.datePipe.transform(this.endAt, this.pipeTemplate),
        this.outputCurrency
      )
      .subscribe((result) => {
        let graphData: Series[] = [];
        let convertedArray: any[][] = this.convertObjectToList(result.rates);
        convertedArray.forEach((element) => {
          let el = { ...element };
          graphData.push({ name: el['0'], value: el['1'] });
        });

        this.data = [
          {
            name: 'PLN',
            series: graphData.sort(
              (d1, d2) =>
                new Date(d1.name).getTime() - new Date(d2.name).getTime()
            ),
          },
        ];
      });
  }

  private convertObjectToList(obj) {
    return Object.keys(obj).map(function (key) {
      var temp = [key, obj[key].PLN];
      return temp;
    });
  }

  ngOnDestroy(): void {
    this.subsink.unsubscribe();
  }
}
