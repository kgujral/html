angular.module("app").factory('FriendService', function($http) {
	return {
		getFriends: function() {
			return ['1', '2', '3', 'Golu', 'Sandu', 'Nicky', 'Karan'];
		},
		sayHello: function() {
			alert('Hello');
		}
	};
});