(function (){
'use strict';
   var app = angular.module('LunchCheck',[])
   app.controller('LunchCheckController',LunchCheckController);
   LunchCheckController.$inject=['$scope'];
   function LunchCheckController($scope){
	$scope.itemList = "";
	var separator = ',';
	$scope.check = function(){
        $scope.count=0;
	var stringArray = $scope.itemList;
	var splitArray = stringArray.split(',');
    angular.forEach(splitArray,function(value){
		if(value!=null && value!=''){
			$scope.count++;
	    }
	});
	if($scope.count<= 3  && $scope.count > 0)
	{
		$scope.message = "Enjoy!";
                $scope.turnGreen();		
	}
	else if($scope.count > 3)
	{
		$scope.message = "Too much!";
		$scope.turnGreen();
	}
	else if($scope.count == 0)
	{
		$scope.message = "Please enter data first";
		$scope.turnRed();
	}
	else{}
	}
    $scope.turnGreen=function(){
		$scope.colorClass="green";
		$scope.borderClass="borderGreen";
	}
	$scope.turnRed=function(){
		$scope.colorClass="red";
		$scope.borderClass="borderRed";
	}
   }

})(); 
