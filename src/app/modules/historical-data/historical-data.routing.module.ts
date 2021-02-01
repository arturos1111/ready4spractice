import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/consts/routes';
import { HistoricalDataComponent } from './components/historical-data.component';

const historicalDataRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: HistoricalDataComponent,
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.error.path,
  },
];

@NgModule({
  imports: [RouterModule.forChild(historicalDataRoutes)],
  exports: [RouterModule],
})
export class HistoricalDataRoutingModule {}
