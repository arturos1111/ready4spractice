import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/consts/routes';
import { ErrorComponent } from './components/error.component';

const errorRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(errorRoutes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
