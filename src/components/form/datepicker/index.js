"use strict";

import DatePickerDirective from "./directives/datepicker";

import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.form.datepicker", [])
	.directive("antDatepicker", DirectiveFactory.create(DatePickerDirective))
	.name;