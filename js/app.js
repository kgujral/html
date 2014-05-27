angular.module('app', ['hello', 'world', 'app.filters']);

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

angular.module('app.filters', [])
.filter('reverse', function() {
  return function(sandeep) {
    sandeep = sandeep || '';
    var out = "";
    for (var i = 0; i < sandeep.length; i++) {
      out = sandeep.charAt(i) + out;
    }
    return out;
  };
})
.filter('star', function() {
  return function(input) {
    input = input || '';
    var out = "";
    for (var i = 0; i < input.length; i++) {
    	var character = input.charAt(i);
    	if(character === ' ') {
    		character = '*';
    	}
      out = out + character;
    }
    return out;
  };
});