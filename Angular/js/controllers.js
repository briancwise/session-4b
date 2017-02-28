var app = angular.module('myApp', []);

app.controller("NavController", function( $scope, $http ) {

	var onUserComplete = function (response){
		$scope.user = response.data;
	}

	$http.get('https://api.github.com/users/briancwise')
	.then( onUserComplete )
});