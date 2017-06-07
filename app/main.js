const App = angular.module('app', []);

App.controller('serviceController', ['$scope', function ($scope) {
   
   $scope.services = [
      {name: "Web Development", price: 300.00, checked: false,},
      {name: "Design", price: 400.00, checked: false,},
      {name: "Integration", price: 250.00, checked: false,},
      {name: "Training", price: 220.00, checked: false,},
   ];

   $scope.sum = 0;

   $scope.total = function(e){
      return  (e.checked === true) ? $scope.sum += e.price : $scope.sum -= e.price;
   };

}]);

App.directive('toggle', function() {
    return {
      scope: {
        toggle: '='
      },
      template: '<div ng-click="toggle.checked=!toggle.checked" ng-class="{\'toggle\':true, \'toggle-inner-yes\':toggle.checked, \'toggle-inner-no\':!toggle.checked}"><h2>{{toggle.name}}</h2><p>{{toggle.price | currency : "$" : 2}}</p></div>',
      replace: true
    }
  });