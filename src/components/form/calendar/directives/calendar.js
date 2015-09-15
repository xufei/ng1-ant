import template from "../templates/calendar.html";
import Calendar from "../../../models/calendar/calendar";

export default class CalendarDirective {
	constructor() {
		// 视图模式，一个三个，可以切换，默认是显示日期的
		this.ViewStates = Object.freeze({
			DATE: 0,
			MONTH: 1,
			YEAR: 2
		});

		this.template = template;
		this.restrict = "E";

		this.scope = {
			minDate: "=",
			maxDate: "=",
			selectedDate: "=",
			dateClick: "&"
		};
	}

	link(scope, element, attrs) {
		this.$scope = scope;
	}

	controller($scope) {
		let calendar = new Calendar();
		$scope.calendar = calendar;

		$scope.monthArr = CalendarDirective.months;
		$scope.weekdayArr = CalendarDirective.weekdays;

		$scope.now = new Date();

		if ($scope.selectedDate) {
			calendar.year = $scope.selectedDate.getFullYear();
			calendar.month = $scope.selectedDate.getMonth();
			calendar.date = $scope.selectedDate.getDate();
		}

		$scope.viewMode = this.ViewStates.DATE;

		$scope.dateInRange = function(day) {
			if (!day) {
				return true;
			}

			if ($scope.minDate) {
				if (day.date - $scope.minDate < 0) {
					return false;
				}
			}
			if ($scope.maxDate) {
				if (day.date - $scope.maxDate > 0) {
					return false;
				}
			}
			return true;
		};

		$scope.selectDate = function (day) {
			if ($scope.dateInRange(day)) {
				calendar.date = day.date.getDate();

				$scope.selectedDate = new Date(calendar.year, calendar.month, calendar.date);

				if ($scope.dateClick) {
					$scope.dateClick(calendar.selectedDate);
				}
			}
		};

		$scope.selectMonth = function (month) {
			calendar.month = month;
			$scope.viewMode = this.ViewStates.DATE;

			$scope.selectedDate = new Date(calendar.year, calendar.month, calendar.date);
		}.bind(this);

		$scope.selectYear = function (year) {
			calendar.year = year;
			$scope.viewMode = this.ViewStates.MONTH;

			$scope.selectedDate = new Date(calendar.year, calendar.month, calendar.date);
		}.bind(this);
	}
}

CalendarDirective.weekdays = ["日", "一", "二", "三", "四", "五", "六"];
CalendarDirective.months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];