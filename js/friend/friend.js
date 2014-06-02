angular.module('friends', [])
.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.when('/friend', {
		templateUrl: 'friend/friend.tpl',
		controller: 'FriendCtrl'
	})
	.otherwise({ redirectTo: '/friend' });
})
.controller('FriendCtrl', function ($scope, FriendService) {

	$scope.newFriend = '';
	$scope.friends = FriendService.getFriends();

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};

	$scope.removeFriend = function(index) {
		$scope.friends.splice(index, 1);
	}

});