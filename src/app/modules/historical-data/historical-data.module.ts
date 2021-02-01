import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalDataComponent } from './components/historical-data.component';
import { HistoricalDataRoutingModule } from './historical-data.routing.module';

@NgModule({
  declarations: [HistoricalDataComponent],
  imports: [CommonModule, HistoricalDataRoutingModule],
})
export class HistoricalDataModule {}
