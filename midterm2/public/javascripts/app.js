angular.module('product', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.products = [];
	$scope.cart = [];
	$scope.addProduct = function() {
		      if($scope.title === '' || $scope.price ==='' || $scope.url === '') { return; }
      console.log("In addProduct with "+$scope.title);
      $scope.create({
        title: $scope.title,
		price: $scope.price,
		url: $scope.url,
        sold: 0,
      });
      $scope.formContent = ''
	}
	$scope.incrementUpvotes = function(product) {
		$scope.upvote(product);
	}
	$scope.dovote = function() {
		angular.forEach($scope.products, function(value, key) {
			if(value.selected) {
				$scope.upvote(value);
				$scope.cart.push(value);
			}
		});
	};
	$scope.getAll = function() {
    return $http.get('/products').success(function(data){
      angular.copy(data, $scope.products);
    });
  };
    $scope.create = function(product) {
    return $http.post('/products', product).success(function(data){
      $scope.products.push(data);
    });
  };
  $scope.upvote = function(product) {
      return $http.put('/products/' + product._id + '/upsold')
        .success(function(data){
          console.log("upvote worked");
          product.upvotes += 1;
        });
    };
	    $scope.delete = function(product) {
      $http.delete('/products/' + product._id )
        .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };
  $scope.getAll();
  }
]);