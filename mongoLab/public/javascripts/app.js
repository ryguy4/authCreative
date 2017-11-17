angular.module('joke', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.jokes = [];
	$scope.numRecords = 5;
	$scope.page = 1;
	$scope.maxPages = Math.ceil($scope.jokes.length / $scope.numRecords);
	$scope.next = function(){
		$scope.maxPages = Math.ceil($scope.jokes.length / $scope.numRecords);
		if ($scope.page >= $scope.maxPages) {
		   return
		}
        $scope.page = $scope.page + 1;
    };

    $scope.back = function(){
		if ($scope.page <= 1) {
		   return
		}
        $scope.page = $scope.page - 1;
    };
	
	$scope.addJoke = function() {
		      if($scope.formContent === '') { return; }
      console.log("In addJoke with "+$scope.formContent);
      $scope.create({
        joke: $scope.formJoke,
		punchLine: $scope.formPunchLine,
        upvotes: 0,
      });
      $scope.formJoke = ''
	  $scope.formPunchLine = ''
	}
	$scope.incrementUpvotes = function(joke) {
		$scope.upvote(joke);
	}
	$scope.incrementUpvotesDown = function(joke) {
		$scope.downvote(joke);
	}
	$scope.getAll = function() {
    return $http.get('/jokes').success(function(data){
      angular.copy(data, $scope.jokes);
    });
  };
    $scope.create = function(joke) {
    return $http.post('/jokes', joke).success(function(data){
      $scope.jokes.push(data);
    });
  };
  $scope.upvote = function(joke) {
      return $http.put('/jokes/' + joke._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          joke.upvotes += 1;
        });
    };
	$scope.downvote = function(joke) {
      return $http.put('/jokes/' + joke._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          joke.upvotes -= 1;
        });
    };
	  $scope.delete = function(joke) {
      $http.delete('/jokes/' + joke._id )
        .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };
  $scope.getAll();
  }
]);