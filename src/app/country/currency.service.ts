import { ConnectorService } from '../core/connector/connector.service';

export class CurrencyService extends ConnectorService {

  // list of currencies GET https://currencyconverter.p.mashape.com/availablecurrencies

  protected apiUrl = 'https://currencyconverter.p.mashape.com/';


  constructor($http: angular.IHttpService, $q: angular.IQService, $timeout: angular.ITimeoutService) {
    super($http, $q, $timeout);
  }


  listAllCurrencies() {
    return this.get('availablecurrencies');
  }

  convertCurrency(from: string, from_amount: string, to: string = 'PLN') {

    this.get('', {from, from_amount, to});
  }

}
