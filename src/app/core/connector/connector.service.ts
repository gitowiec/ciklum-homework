export class ConnectorService {

  protected apiUrl: string;

  /**
   * Parse API response
   * @param response
   * @returns {Array}
   */
  static parseResponse(response: any): any {
    return response.data.result || [];
  }

  static transformRequest(obj: any) {
    let str = [];
    for (let p in obj) {
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    }
    return str.join("&");
  }

  /** @ngInject */
  constructor(protected $http: angular.IHttpService,
              protected $q: angular.IQService,
              protected $timeout: angular.ITimeoutService) {

  }

  /**
   * GET method
   *
   * @param endpoint API endpoint name
   * @param data payload
   * @param config query options
   * @returns {IHttpPromise<T>}
   */
  get(endpoint: string = '', data: any = {}, config: any = {}): angular.IHttpPromise<any> {
    let url = this.apiUrl + endpoint;
    config.params = data;
    return this.$http.get(url, config)
      .then((response: any) => {
        return config.autoParse ?
          ConnectorService.parseResponse(response) :
          response;
      });
  };

  /**
   * POST method
   *
   * @param endpoint API endpoint name
   * @param data payload to pass
   * @param config query options
   * @returns {IHttpPromise<T>}
   */
  post(endpoint: string = '', data: any = {}, config: any = {}): angular.IHttpPromise<any> {
    let url = this.apiUrl + endpoint;
    config.transformRequest = ConnectorService.transformRequest;
    return this.$http.post(url, data, config)
      .then((response: any) => {
        return config.autoParse ?
          ConnectorService.parseResponse(response) :
          response;
      });
  };


}
