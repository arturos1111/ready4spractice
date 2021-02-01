import { Component, OnInit } from '@angular/core';
import { APP_ROUTES, RouteModel } from 'src/app/core/consts/routes';
import { URL_IMAGES } from 'src/app/core/consts/urls';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  images: string = URL_IMAGES;
  appRoutes: RouteModel = APP_ROUTES;

  ngOnInit(): void {
    console.log(this.appRoutes);
  }
}
