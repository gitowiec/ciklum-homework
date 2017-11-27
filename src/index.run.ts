export default applitationInit;

import ICountriesRootScope from './app/core/scope/rootscope.interface';

/** @ngInject */
function applitationInit($rootScope: ICountriesRootScope) {
  $rootScope.cancelEvent = (evt) => {
    if (evt) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };
}
