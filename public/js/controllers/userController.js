vinventory.controller("listUsers", function($scope, $rootScope, globalData, globalFunctions, userService){
	
	userService.listUsers();
	$scope.products = globalData.users;
	
});
