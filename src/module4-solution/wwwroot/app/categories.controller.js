(function () {
	'use strict';

	angular.module('MenuApp')
		.controller('CategoriesController', CategoriesController);

	CategoriesController.$inject = ['categories'];
	function CategoriesController(categories) {
		var categoryList = this;
		//console.log(categories);
		categoryList.categories = categories.data;
	}

})();