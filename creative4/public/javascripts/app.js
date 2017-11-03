var app = window.angular.module('app', [])

app.factory('jokeFetcher', jokeFetcher);
app.controller('mainCtrl', mainCtrl);

function jokeFetcher ($http) {
  
  var API_ROOT = 'getJoke'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
  }
  };

function mainCtrl ($scope, jokeFetcher, $http) {
  $scope.jokes = [];
  $scope.randomJoke = {};

  jokeFetcher.get()
    .then(function (data) {
      $scope.jokes = data
	  $scope.randomJoke = $scope.jokes[Math.floor(Math.random() * $scope.jokes.length)];
    });
	
  $scope.newJoke = function() {
	  $scope.randomJoke = $scope.jokes[Math.floor(Math.random() * $scope.jokes.length)];
  };

  $scope.addJoke = function() {
   var formData = {question:$scope.Question,answer:$scope.Answer, upvotes:0};
   $scope.Question = "";
   $scope.Answer = "";
   //console.log(formData);

   var jokeURL = 'getJoke';
   $http({
     url: jokeURL,
     method: "POST",
     data: formData
    }).success(function(data, status, headers, config) {
      console.log("Post worked");
    }).error(function(data, status, headers, config) {
      console.log("Post failed");
  });
     jokeFetcher.get()
    .then(function (data) {
      $scope.jokes = data
    });
};

}
