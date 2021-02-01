import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesCarouselComponent } from './components/rates-carousel.component';
import { RatesCarouselRoutingModule } from './rates-carousel.routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RatesCarouselItemComponent } from './components/rates-carousel-item/rates-carousel-item.component';

@NgModule({
  declarations: [RatesCarouselComponent, RatesCarouselItemComponent],
  imports: [CommonModule, RatesCarouselRoutingModule, NgbModule],
})
export class RatesCarouselModule {}
