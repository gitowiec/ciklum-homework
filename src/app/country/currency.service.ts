import { ConnectorService } from '../core/connector/connector.service';

const responseExample = {
  data: {
    "result": "5.1951878953243209724",
    "valid": true,
    "from-value": "1",
    "to-type": "PLN",
    "from-type": "NZD"
  }
};

export class CurrencyService extends ConnectorService {

  // https://market.mashape.com/neutrinoapi/convert-1

  protected apiUrl = 'https://community-neutrino-currency-conversion.p.mashape.com/';


  constructor($http: angular.IHttpService, $q: angular.IQService, $timeout: angular.ITimeoutService) {
    super($http, $q, $timeout);
  }

  /**
   * TODO uncomment return line for real currency conversion API, mocked because of daily request limit
   * @param {string} fromType
   * @param {number} fromValue
   * @param {string} toType
   * @returns {angular.IHttpPromise<any>}
   */
  convertCurrency(fromType: string, fromValue: number = 1, toType: string = 'PLN'): angular.IHttpPromise<any> {
    const data = {};
    data['from-value'] = fromValue;
    data['from-type'] = fromType;
    data['to-type'] = toType;
    // return this.post('convert', data, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});

    let deferred = this.$q.defer();
    setTimeout(() => {
      console.log('Mocking XHR request to currency conversion public API');
      deferred.resolve(responseExample);

    }, 1000);
    return deferred.promise;
  }

}
