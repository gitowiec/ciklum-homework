export class ConnectorService {


  protected apiUrl: string;

  /** @ngInject */
  constructor(private $http: angular.IHttpService,
              private $q: angular.IQService,
              private $timeout: angular.ITimeoutService) {

  }


  /**
   * HTTP request
   *
   * @param url user defined URL
   * @param method method name like GET/POST/PUT/DELETE/PATH/HEAD
   * @param data payload to pass
   * @param options query options
   * @returns {IHttpPromise<T>}
   */
  request(url: string, method: string, data?: any, options?: any) {
    options = options || {};
    angular.extend(options, {
      method: method,
      url: url
    });
    if (data) {
      options.data = data;
    }
    return this.$http(options);
  };


  /**
   * GET method
   *
   * @param endpoint API endpoint name
   * @param data payload to pass
   * @param options query options
   * @returns {IHttpPromise<T>}
   */
  get(endpoint: string = '', data?: any, options?: any) {
    let url = options && options.external ?
      endpoint :
      this.apiUrl + endpoint;
    options = options || {};
    if (data) {
      options.params = data;
    }
    return this.$http.get(url, options)
      .then((response: any) => {
        return options.autoParse ?
          this.parseResponse(response) :
          response;
      });
  };

  /**
   * Parse API response
   * @param response
   * @returns {Array}
   */
  parseResponse(response: any): any {
    return response.data.result || [];
  }


}
