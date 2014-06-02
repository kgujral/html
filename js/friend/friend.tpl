<div>
	<input type="text" ng-model = "search" placeholder = "Search here">
	<ul>
		<li ng-repeat="friend in filteredFriends = (friends | filter:search)">
			{{friend}}
			<button class="btn btn-danger" ng-click="removeFriend($index)">Remove Friend</button>
		</li>
	</ul>
	<div>Friend Count : {{friends.length}}</div>
	<div>Filtered Friend Count : {{filteredFriends.length}}</div>
	<input type="text" ng-model = "newFriend" required>
	<button ng-click="addFriend()" class="btn btn-success">Add Friend</button>
</div>