'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.emp',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  //$locationProvider.hashPrefix('!');
  
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
