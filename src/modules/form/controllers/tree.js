export default class TreeController {
	constructor($scope) {
		$scope.areaData = [{
			name : "Jiangsu",
			code : "js",
			children : [{
				name : "Nanjing",
				code : "nj"
			}, {
				name : "Suzhou",
				code : "sz",
				children : [{
					name : "Wujiang",
					code : "wj"
				}, {
					name : "Changshu",
					code : "cs"
				}]
			}]
		}, {
			name : "Yunnan",
			code : "yn"
		}, {
			name : "Fujian",
			code : "fj"
		}];

		$scope.$on("sn.controls.tree:selectedNodeChanged", function(evt, data) {
			$scope.selectedTreeItem = data.newNode;
		});

		$scope.getCheckedItems = function() {
			console.table(getCheckedItems($scope.areaData));
		};

		function getCheckedItems(data) {
			var result = [];
			data.forEach(function(it) {
				if (it.$checked) {
					result.push(it);
				}

				if (it.children) {
					result = result.concat(getCheckedItems(it.children));
				}
			});

			return result;
		};
	}
}

TreeController.$inject = ["$scope"];