export class CountryDetailsController implements angular.IController {

  protected countryDetailsData;
  protected currencies;

  /** @ngInject */
  constructor(private $scope: angular.IScope) {
  }

  $onInit(): void {
    console.log(this.countryDetailsData);
    [this.countryDetailsData, ...this.currencies] = this.countryDetailsData;
  }
}
