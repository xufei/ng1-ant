import template from "../templates/pager.html";

export default class PagerDirective {
	constructor() {
		this.template = template;
		this.restrict = "E";

		this.scope = {
			disabled: "=",
			count: "=",
			pageSize: "="
		};
	}

	link(scope, element, attrs) {
		this.$scope = scope;
	}

	controller($scope) {
		let pager = new Pager();

		$scope.pager = pager;

		$scope.$watch("pageSize", function(size) {
			if (typeof size == "number") {
				pager.pageSize = size;
			}
		});

		$scope.$watch("count", function(count) {
			if (typeof count == "number") {
				pager.count = count;
			}
		});
	}
}


class Pager {
	constructor() {
		this._pageSize = 10;
		this._listSize = 5;

		this._offset = 0;
	}

	set count(val) {
		this._count = val;
		this.resetPageList();
	}

	get count() {
		return this._count;
	}

	set pageSize(val) {
		this._pageSize = val;
		this.resetPageList();
	}

	get pageSize() {
		return this._pageSize;
	}

	resetPageList() {
		var that = this;

		if (this._count % this._pageSize == 0) {
			this.totalPages = this._count / this._pageSize;
		} else {
			this.totalPages = Math.ceil(this._count / this._pageSize);
		}

		if (this.totalPages == 0) {
			this.totalPages = 1;
		}

		console.log(this.totalPages);

		var last = Math.min(this._offset + this._listSize, this.totalPages);

		this.pages = Array.from(Array(last-that._offset), (v, i) => Object.create({
			index: i+that._offset,
			active: false
		}));
	}
}