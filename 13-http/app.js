angular.module('app', [])

.controller('appCtrl', function($scope, UsersFactory){
  UsersFactory.get().then(
    function(users){
      $scope.users = users.data;
    },
    function(err){
      $scope.error = err.statusText;
    }
  )
})

.factory("UsersFactory", function($http){
  return {
    get: function(){
      return $http({
        url: "users.json",
        method: "GET"
      })
    }
  }
})
