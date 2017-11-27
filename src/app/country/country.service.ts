import { ConnectorService } from '../core/connector/connector.service';

export class CountryService extends ConnectorService {

  // list of countries GET https://restcountries-v1.p.mashape.com/all
  protected apiUrl = 'https://restcountries-v1.p.mashape.com/';

  constructor($http: angular.IHttpService, $q: angular.IQService, $timeout: angular.ITimeoutService) {
    super($http, $q, $timeout);
  }

  listAllCountries() {
    return this.get('all');
  }

  getCountryByCode(code: string): angular.IHttpPromise<any> {
    return this.get('alpha/' + code);
  }
}
