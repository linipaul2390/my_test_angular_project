function empService($http){
   this.getTasks = function(){
    return $http.get('data/data.json');
  }
};

angular.module('myApp.emp')
.service('empService', empService);
