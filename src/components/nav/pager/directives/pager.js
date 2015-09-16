import template from "../templates/pager.html";

export default class PagerDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";

		this.scope = {
			disabled: "="
		};
	}

	link(scope, element, attrs) {
		this.$scope = scope;
	}

	controller($scope) {
	}
}