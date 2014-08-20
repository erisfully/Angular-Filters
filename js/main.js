var myApp = angular.module('currencyApp', []);


myApp.controller('currencyController', ['$scope', function($scope){
  $scope.amount = 1234.56
}]);

myApp.filter('myCurrency', ['$filter', function ($filter) {
  return function(input) {
    input = parseFloat(input);
    if(input % 1 === 0) {
      input = input.toFixed(0);
    }
    return '$' + input;
  };
}]);