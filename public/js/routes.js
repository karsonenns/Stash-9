vinventory.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'partials/customerList.htm',
      controller: 'customerList'
    }).
    when('/viewProducts', {
      templateUrl: 'partials/viewProducts.htm',
      controller: 'viewProducts'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);