import { CountryDetailsController } from './country.details.controller';

export const countryDetailsComponent: angular.IComponentOptions = {
  bindings: {
    countryDetailsData: '<'
  },
  controller: CountryDetailsController,
  controllerAs: 'details',
  template: require('./country.details.html')
};
