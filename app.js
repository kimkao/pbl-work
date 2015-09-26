ROOT_URL = 'http://testing.berkeley-pbl.com';
var token = '6461766964626c697540676d61696c2e636f6d';

var app = angular.module('myApp', ['ngRoute']);

// var chart-app = angular.module("app", ["chart.js"]).controller("RadarCtrl", function ($scope) {
//   $scope.labels =["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

//   $scope.data = [
//     [65, 59, 90, 81, 56, 55, 40],
//     [28, 48, 40, 19, 96, 27, 100]
//   ];
// });
app.controller('ClickController', function($scope, $http){
  $scope.test = 'test2';
  $scope.unused = 'this si an unused message';
  function pullClicks(){
    $http.get(tokenizedURL(ROOT_URL + '/api/golink_clicks?key=bieber')).
        success(function(data, status, headers, config){
          $scope.clicks = data;
        }).
        error(function(data, status, headers, config){
          console.log('there was an error');
          console.log(data);
      });
  }
    pullClicks();
});
app.controller('HomeController', function($scope, $http) {
	$scope.test = 'this is the variable under the scope object called test';
	getPosts = function(){
	 	$http.get(tokenizedURL(ROOT_URL + '/api/current_members')).
	    	success(function(data, status, headers, config){
	    		$scope.members = data;
	    	}).
	    	error(function(data, status, headers, config){
	    		console.log('there was an error');
	    		console.log(data);
    	});
	}	
	getPosts();
});

function tokenizedURL(url){
    if(url.indexOf('?') != -1){
        tokenized = url + '&token='+token;
    }
    else{
        tokenized =  url + '?token='+token;
    }
    return tokenized;
}