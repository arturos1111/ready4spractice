import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalDataComponent } from './components/historical-data.component';
import { HistoricalDataRoutingModule } from './historical-data.routing.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [HistoricalDataComponent],
  imports: [CommonModule, HistoricalDataRoutingModule, NgxChartsModule],
})
export class HistoricalDataModule {}
