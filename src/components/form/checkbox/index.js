"use strict";

import CheckboxDirective from "./directives/checkbox";
import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.form.checkbox", [])
	.directive("antCheckbox", DirectiveFactory.create(CheckboxDirective))
	.name;