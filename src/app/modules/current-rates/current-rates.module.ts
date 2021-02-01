import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentRatesComponent } from './components/current-rates.component';
import { CurrentRatesRoutingModule } from './current-rates.routing.module';

@NgModule({
  declarations: [CurrentRatesComponent],
  imports: [CommonModule, CurrentRatesRoutingModule],
})
export class CurrentRatesModule {}
