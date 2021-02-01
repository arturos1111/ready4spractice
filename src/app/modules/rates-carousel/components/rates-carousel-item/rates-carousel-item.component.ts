import { Component, Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CarouselItem } from '../rates-carousel.component';

@Component({
  selector: 'app-rates-carousel-item',
  templateUrl: './rates-carousel-item.component.html',
  styleUrls: ['./rates-carousel-item.component.scss'],
  providers: [NgbCarouselConfig],
})
export class RatesCarouselItemComponent {
  @Input() items: CarouselItem[];
}
