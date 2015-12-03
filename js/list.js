'use strict';
var app = angular.module("HelpChennaiApp", []);

app.controller('HelpChennaiController', function($scope, $http) {
		$scope.init =function(){
			$scope.listmode = true;
			$scope.postdata = {
				title: "",
				name: "",
				phone: "",
				address: "",
				locality: "",
				tags: []

			}
			$scope.tags = {"shelter" : false, "food" : false, "medicine": false, "recharge": false}
			$scope.load_data()
		}
		$scope.load_data = function(){
			$http({
	            method: 'GET',
	            url: '/api/search?lon=0&lat=0'
	        })
	        .success(function(data, status) {
	        	$scope.listing = data.data;

	        });

		}
			
        $scope.addListing = function() {
        	$scope.listmode = false;
        }

        $scope.populateTags = function(t, v) {
        	$scope.tags[t] = v;

        }

        $scope.post = function(param) {
        	


        	for(var key in $scope.tags) {
        		if($scope.tags[key] == true){
        			$scope.postdata.tags.push(key);
        		}
        			
        	}
        	$http({
        	  method  : 'POST',
        	  url     : 'api/post',
        	  data    : angular.toJson($scope.postdata),  // pass in data as strings
        	  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        	 })
        	  .success(function(data) {
        	  });
        }
		$scope.init();
})


