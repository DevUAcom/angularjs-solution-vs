(function () {
	'use strict';

	angular.module('data')
		.constant('ApiBase', "https://davids-restaurant.herokuapp.com")
		.service('MenuDataService', MenuDataService);

	MenuDataService.$inject = ['ApiBase', '$http'];
	function MenuDataService(ApiBase, $http) {
		var service = this;

		service.getAllCategories = function() {
			return $http({
				method: "GET",
				url: ApiBase + "/categories.json"
			});
		};

		service.getItemsForCategory = function (categoryShortName) {
			console.log("categoryShortName: " + categoryShortName);
			return $http({
				method: "GET",
				url: ApiBase + "/menu_items.json",
				params: {category: categoryShortName}
			});
		};
	}
})();