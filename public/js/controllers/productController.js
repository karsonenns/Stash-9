vinventory.controller("listProducts", function($scope, $rootScope, globalData, globalFunctions, productsService){
	
	productsService.listProducts();
	$scope.products = globalData.products;

});
