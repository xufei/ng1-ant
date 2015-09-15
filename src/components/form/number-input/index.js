"use strict";

import NumberInputDirective from "./directives/number-input";
import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.form.numberInput", [])
	.directive("antNumberInput", DirectiveFactory.create(NumberInputDirective))
	.name;