import ICountryData from './country.details.d';


// const data = require('./list.data.json');
import * as data from './list.data.json';

// interface ICountryList {
//   countryList: Array<ICountryData>;
// }

export class CountryListController implements angular.IController {

  protected countryList: Array<ICountryData>;

  // private $scope: angular.IScope;
  /** @ngInject */
  constructor(private $scope: angular.IScope) {
  }

  $onInit(): void {
    this.countryList = <any>data;
  }
}
