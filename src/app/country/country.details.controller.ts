export class CountryDetailsController implements angular.IController {

  protected countryDetailsData;

  /** @ngInject */
  constructor(private $scope: any) {
  }

  $onInit(): void {
    console.log(this.countryDetailsData);
  }
}
