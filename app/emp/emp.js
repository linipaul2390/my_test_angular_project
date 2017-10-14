'use strict';

angular.module('myApp.emp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/emp', {
    templateUrl: 'emp/emp.html',
    controller: 'EmpCtrl'
  });
}])

.controller('EmpCtrl', ['$scope','empService',function($scope, empService) {
    $scope.myNewList = [{
      "name":"Linipaul",
      "tag":"Developer One",
      "designation":"Back End Developer"
    },{
      "name":"Praveen",
      "tag":"Developer Two",
      "designation":"Front End Developer"
    }];
    empService.getTasks()
      .then(function(response){
        $scope.tasks = response.data;
      });
}]);
