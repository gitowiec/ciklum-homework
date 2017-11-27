import { CountryService } from './app/country/country.service';
import { CurrencyService } from './app/country/currency.service';


export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: angular.ILocationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      url: '/',
      // component: 'root'
      views: {
        '@': {template: require('./app/root.html')},
        'nav@root': {template: require('./app/tpl/nav.html')},
        'left@root': {
          template: require('./app/tpl/col-6.html'),
          controller: function ($scope) {
            $scope.greetings = 'Greetings visitor, please choose desired page from top menu.';
          }
        },
        'right@root': {template: require('./app/tpl/col-6.html')},
      }
    })
    .state('root.list', {
      url: 'list',
      views: {
        '!$default.left.inner@root': {
          component: 'countryList'
        }
      },
      resolve: {
        countryListData: function (countryService: CountryService) {
          return countryService.listAllCountries()
            .then(response => response.data);
        }
      }
    })
    .state('root.details', {
      url: 'details/:alpha3Code',
      params: {
        currencies: []
      },
      views: {
        'left@root': {template: require('./app/tpl/col-12.html')},
        'right@root': null,
        '!$default.left.inner@root': {
          component: 'countryDetails'
        }
      },
      resolve: {
        countryDetailsData: function (countryService: CountryService, currencyService: CurrencyService, $transition$, $q: angular.IQService) {
          const promises = [],
            params = $transition$.params();
          console.log(params);
          promises.push(countryService.getCountryByCode(params.alpha3Code)
            .then(response => response.data));
          angular.forEach(params.currencies, (currency) => {
            promises.push(currencyService.convertCurrency(currency)
              .then(response => response.data));
          });

          return $q.all(promises);
        }
      }
    });
}
