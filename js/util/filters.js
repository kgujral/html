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