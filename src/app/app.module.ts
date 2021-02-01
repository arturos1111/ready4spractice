import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { NavbarModule } from './shared/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatButtonModule, NavbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
