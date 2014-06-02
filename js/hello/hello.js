angular.module('hello', [])
.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.when('/hello', {
		templateUrl: 'hello/hello.tpl',
		controller: 'HelloCtrl',
	});
})
.controller('HelloCtrl', function ($scope) {

	$scope.content = "Karan";

	$scope.callAlertButtonClick = function() {
		alert('Chhutti');
	};

});