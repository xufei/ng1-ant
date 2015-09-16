"use strict";

import SelectDirective from "./directives/select";

import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.form.select", [])
	.directive("antSelect", DirectiveFactory.create(SelectDirective))
	.name;