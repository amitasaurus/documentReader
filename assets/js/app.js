(function() {
	angular.module('documentReader', ['ngRoute', 'ngMaterial', 'ngMdIcons', 'ng-fx', 'ngAnimate'])
		.config(['$routeProvider', '$mdThemingProvider', function($routeProvider, $mdThemingProvider) {
			$routeProvider.when('/', {
				templateUrl: 'assets/views/home.html',
				controller: 'homeCtrl'
			})
			$mdThemingProvider.theme('default')
				.primaryPalette('blue-grey')
				.accentPalette('amber');
		}])
})();
