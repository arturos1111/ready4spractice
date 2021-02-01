import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/consts/routes';
import { RatesCarouselComponent } from './components/rates-carousel.component';

const ratesCarouselRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: RatesCarouselComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ratesCarouselRoutes)],
  exports: [RouterModule],
})
export class RatesCarouselRoutingModule {}
