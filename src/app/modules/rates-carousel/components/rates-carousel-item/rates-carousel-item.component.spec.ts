import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesCarouselItemComponent } from './rates-carousel-item.component';

describe('RatesCarouselComponent', () => {
  let component: RatesCarouselItemComponent;
  let fixture: ComponentFixture<RatesCarouselItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RatesCarouselItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatesCarouselItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
