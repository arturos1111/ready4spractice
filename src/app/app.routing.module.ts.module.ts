import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './core/consts/routes';

const appRoutes: Routes = [
  { path: '', redirectTo: APP_ROUTES.current_rates.path, pathMatch: 'full' },
  {
    path: APP_ROUTES.current_rates.path,
    loadChildren: () => {
      return import('./modules/current-rates/current-rates.module').then(
        (module) => module.CurrentRatesModule
      );
    },
  },
  {
    path: APP_ROUTES.rates_carousel.path,
    loadChildren: () => {
      return import('./modules/rates-carousel/rates-carousel.module').then(
        (module) => module.RatesCarouselModule
      );
    },
  },
  {
    path: APP_ROUTES.historical_data.path,
    loadChildren: () => {
      return import('./modules/historical-data/historical-data.module').then(
        (module) => module.HistoricalDataModule
      );
    },
  },
  {
    path: APP_ROUTES.error.path,
    loadChildren: () => {
      return import('./shared/error/error.module').then(
        (module) => module.ErrorModule
      );
    },
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.error.path,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
