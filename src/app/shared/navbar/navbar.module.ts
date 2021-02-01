import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavbarComponent],
  imports: [RouterModule, CommonModule, MatButtonModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
