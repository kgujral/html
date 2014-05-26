angular.module('app', ['hello', 'world']);

angular.module('hello', [])
.controller('HelloCtrl', function ($scope) {

	$scope.content = "Karan";

	$scope.callAlertButtonClick = function() {
		alert('Chhutti');
	};

});

angular.module('world', [])
.controller('WorldCtrl', function ($scope) {

	$scope.content = "Akshay";

});
