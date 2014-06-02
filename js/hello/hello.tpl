<div ng-controller="HelloCtrl">
	<input type="text" ng-model="content">
	<input type="text" ng-model="content">
	<span>{{content | reverse | star | uppercase}}</span>
	<button ng-click="callAlertButtonClick()">Click Me</button>
</div>