'use strict';

angular.module('myApp.emp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/emp', {
    templateUrl: 'emp/emp.html',
    controller: 'EmpCtrl'
  });
}])

.controller('EmpCtrl', ['$scope',function($scope) {
    $scope.myNewList = [{
      "name":"Linipaul",
      "tag":"Developer One"
    },{
      "name":"Praveen",
      "tag":"Developer Two"
    }]
}]);
