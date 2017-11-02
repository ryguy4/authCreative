var app = window.angular.module('app', [])

app.factory('jokeFetcher', jokeFetcher)
app.controller('mainCtrl', mainCtrl)

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
  }

function mainCtrl ($scope, jokeFetcher, $http) {
  $scope.jokes = [];

  jokeFetcher.get()
    .then(function (data) {
      $scope.jokes = data
    });

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
}
}
