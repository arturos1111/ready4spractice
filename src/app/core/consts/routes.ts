export interface RouteModel {
  path: string;
  current_rates: {
    path: string;
  };
  rates_carousel: {
    path: string;
  };
  error: {
    path: string;
  };
}

export const APP_ROUTES: RouteModel = {
  path: '',
  current_rates: {
    path: 'current-rates',
  },
  rates_carousel: {
    path: 'rates-carousel',
  },
  error: {
    path: 'error',
  },
};
