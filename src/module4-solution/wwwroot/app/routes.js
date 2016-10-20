(function () {
	'use strict';

	angular.module('MenuApp')
		.config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	function RoutesConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			// Home page
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.template.html'
			})
			// Categories
			.state('categories', {
				url: '/categories',
				templateUrl: 'templates/categories.template.html',
				controller: 'CategoriesController as catCtrl',
				resolve: {
					categories: ['MenuDataService', function (MenuDataService) {
						return MenuDataService.getAllCategories();
					}]
				}
			})
			// Items
			.state('items', {
				url: '/{categoryShortName}/items',
				templateUrl: 'templates/items.template.html',
				controller: 'ItemsController as itemCtrl',
				resolve: {
					items: ['$stateParams', 'MenuDataService',
						function ($stateParams, MenuDataService) {
							return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
						}
					]
				}
			});
	}

})();