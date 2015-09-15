import template from "../templates/slider.html";

export default class SliderDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";

		this.scope = {
			checked: "=ngModel",
			disabled: "="
		};
	}

	link(scope, element, attrs) {
		this.$scope = scope;
	}

	controller($scope) {
	}
}