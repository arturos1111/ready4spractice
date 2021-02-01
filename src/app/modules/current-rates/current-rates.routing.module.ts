import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/consts/routes';
import { CurrentRatesComponent } from './components/current-rates.component';

const currentRatesRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: CurrentRatesComponent,
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.error.path,
  },
];

@NgModule({
  imports: [RouterModule.forChild(currentRatesRoutes)],
  exports: [RouterModule],
})
export class CurrentRatesRoutingModule {}
