angular.module('world', [])
.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.when('/world', {
		templateUrl: 'world/world.tpl',
		controller: 'WorldCtrl',
	});
})
.controller('WorldCtrl', function ($scope) {

	$scope.content = "Akshay";

});