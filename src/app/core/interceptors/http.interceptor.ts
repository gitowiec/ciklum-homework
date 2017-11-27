import ICountriesRootScope from '../scope/rootscope.interface';


export class HttpInterceptor implements angular.IHttpInterceptor {
  public static $inject = ["$rootScope", "$injector", "$q"];

  public static Factory($rootScope: ICountriesRootScope, $injector: angular.auto.IInjectorService, $q: angular.IQService) {
    return new HttpInterceptor($rootScope, $injector, $q);
  }

  constructor(private $rootScope: ICountriesRootScope, private $injector: angular.auto.IInjectorService, private $q: angular.IQService) {

  }

  public request = (config): angular.IPromise<any> => {

    // enable CORS
    if (!angular.isDefined(config.withCredentials)) {
      // config.withCredentials = true;
    }
    // console.log('interceptor ', this);
    // authorize
    config.headers['X-Mashape-Key'] = 'gjUYmtj9q2mshXhhuTb4QaQwd91Jp1KnLKajsnHCbEUkimeSw8';

    return config;
  };

  public requestError(request): angular.IPromise<any> {
    return request;
  };

  public response(response): angular.IPromise<any> {
    return response;
  };

  public responseError(rejection = {}): angular.IPromise<any> {
    return this.$q.reject(rejection);
  };
}
