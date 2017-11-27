export default httpConfig;

/** @ngInject */
function httpConfig($httpProvider: angular.IHttpProvider) {

    // enable CORS
    // $httpProvider.defaults.withCredentials = true;
    // delete $httpProvider.defaults.headers.common['X-Requested-With'];

    // add common http interceptor
    $httpProvider.interceptors.push('httpInterceptor');
}


