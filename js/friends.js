angular.module('friends', [])
.controller('FriendCtrl', function ($scope) {

	$scope.newFriend = '';
	$scope.friends = ['Amit', 'Barfi', 'Deepu', 'Golu', 'Sandu', 'Nicky', 'Karan'];

	$scope.addFriend = function() {
		$scope.friends.push($scope.newFriend);
		$scope.newFriend = '';
	};

	$scope.removeFriend = function(index) {
		$scope.friends.splice(index, 1);
	}

});