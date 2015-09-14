"use strict";

import CalendarDirective from "./directives/calendar";

import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.form.calendar", [])
	.directive("antCalendar", DirectiveFactory.create(CalendarDirective))
	.name;