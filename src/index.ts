import * as angular from 'angular';

import applitationInit from './index.run';
import httpConfig from './http.config';
import { HttpInterceptor } from './app/core/interceptors/http.interceptor';

import { rootComponent } from './app/root';
import { countryListComponent } from './app/country/country.list';
import { countryDetailsComponent } from './app/country/country.details';

import { CountryService } from './app/country/country.service';
import { CurrencyService } from './app/country/currency.service';

import '@uirouter/angularjs';
import routesConfig from './routes';
// import 'bootstrap-sass';

import './index.scss';

export const app: string = 'app';

angular
  .module(app, ['ui.router'])
  .factory('httpInterceptor', HttpInterceptor.Factory)
  .config(routesConfig)
  .config(httpConfig)
  .service('countryService', CountryService)
  .service('currencyService', CurrencyService)
  .component('root', rootComponent)
  .component('countryList', countryListComponent)
  .component('countryDetails', countryDetailsComponent)
  .run(applitationInit);
