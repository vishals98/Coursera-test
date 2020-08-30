(function () {
  'use strict';

  angular.module('LunchCheck',[]).controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject =['$scope'];

  function LunchCheckController ($scope){
    $scope.list = '';
    $scope.msg = '';
    $scope.fontStyle = {};
    $scope.boxStyle = {};
    
    $scope.CalculateItems = function () {
      console.log ('The Items');
      console.log ($scope.list);
      if($scope.list !== '') {
        var arr = $scope.list.split(',');
        var count =0;
        for(var i =0; i<arr.length; i++){
          if(arr[i].trim() !=='')
            count++;
        }
        if(count > 0){
          if(count <=3){
            $scope.msg = 'ENJOY!';
          }
          else if(count > 3){
            $scope.msg = 'Too Much!';
          }
          $scope.fontStyle = {
            "color":"green"
          };
          $scope.boxStyle = {
            "border-color":"green"
          };
        }
        else {
          enterItems();
        }
      }
      else {
        enterItems();
      }
    }
    var enterItems = function() {
      $scope.msg = 'Please enter data first';
        $scope.fontStyle = {
          "color":"red"
        };
        $scope.boxStyle = {
          "border-color":"red"
        };
    };
  }
})();