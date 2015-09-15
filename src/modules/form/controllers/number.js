export default class NumberController {
	constructor($scope) {
		$scope.value = 5;

		$scope.maxValue = 13;
	}
}

NumberController.$inject = ["$scope"];