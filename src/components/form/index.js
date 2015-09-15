"use strict";

import checkbox from "./checkbox/index";
import calendar from "./calendar/index";
import datepicker from "./datepicker/index";
import slider from "./slider/index";
import numberInput from "./number-input/index";

export default angular.module("components.form", [checkbox, calendar, datepicker, slider, numberInput])
	.name;