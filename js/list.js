'use strict';
var app = angular.module("HelpChennaiApp", []);

app.controller('HelpChennaiController', function($scope, $http) {
	
		$http({
            method: 'GET',
            url: '/api/search?lon=0&lat=0'
        })
        .success(function(data, status) {
        	$scope.listing = data.data;
        	
        })
	
})


