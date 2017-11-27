import { CountryService } from './app/country/country.service';


export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      component: 'root'
    })
    // .state('list', {
    //   url: '/list',
    //   component: 'countryList'
    // })
    .state('details', {
      url: '/details/:alpha3Code',
      component: 'countryDetails',
      resolve: {
        countryDetailsData: function (countryService: CountryService, $transition$) {
          return countryService.getCountryByCode($transition$.params().alpha3Code)
            .then(response => response.data);
        }
      }
    });
}
