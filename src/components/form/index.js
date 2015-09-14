"use strict";

import checkbox from "./checkbox/index";
import calendar from "./calendar/index";
import datepicker from "./datepicker/index";

export default angular.module("components.form", [checkbox, calendar, datepicker])
	.name;