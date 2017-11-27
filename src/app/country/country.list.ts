import {CountryListController} from './country.list.controller';
export const countryListComponent: angular.IComponentOptions = {
  template: require('./country.list.html'),
  controller: CountryListController,
  controllerAs: 'list'
};
