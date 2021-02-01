import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesCarouselComponent } from './components/rates-carousel.component';
import { RatesCarouselRoutingModule } from './rates-carousel.routing.module';

@NgModule({
  declarations: [RatesCarouselComponent],
  imports: [CommonModule, RatesCarouselRoutingModule],
})
export class RatesCarouselModule {}
