export default class DateController {
	constructor($scope) {
		$scope.oneDay = new Date(2012, 3, 9);
	}
}

DateController.$inject = ["$scope"];