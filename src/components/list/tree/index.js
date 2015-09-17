"use strict";

import TreeDirective from "./directives/tree";

import DirectiveFactory from "../../../utils/directive";

export default angular.module("components.list.tree", [])
	.directive("antTree", DirectiveFactory.create(TreeDirective))
	.name;