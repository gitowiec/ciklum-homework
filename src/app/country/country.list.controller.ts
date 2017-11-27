import ICountryData from './country.details.d';


// const data = require('./list.data.json');
// import * as data from './list.data.json';

export class CountryListController implements angular.IController {

  protected countryListData: Array<ICountryData>;

  // private $scope: angular.IScope;
  /** @ngInject */
  constructor(private $scope: angular.IScope) {
  }

  $onInit(): void {
    // this.countryListData = <any>data;
  }
}
