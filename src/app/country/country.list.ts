import {CountryListController} from './country.list.controller';
export const countryListComponent: angular.IComponentOptions = {
  bindings: {
    countryListData: '<'
  },
  controller: CountryListController,
  controllerAs: 'list',
  template: require('./country.list.html')
};
