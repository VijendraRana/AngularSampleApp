
var myApp = angular.module('SampleAngularApp', ['ngRoute']);

//function getRoute(name) {
//    return {
//        templateUrl:'Views/'+name+'.html';
//    }

//}



myApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.when('/Sample', {
        templateUrl: 'AppJs/Views/Sample.html',
        controller: 'SampleCtrl'
    })
  .when('/Sample1', {
      templateUrl: 'AppJs/Views/Sample1.html',
  })
  .otherwise({
      redirectTo: '/Sample'
  });
    $locationProvider.html5Mode(true);

});


//myApp.controller('SampleCtrler', function SampleCtrler($scope) {

//    $scope.firstName = "SampleCtrler";

//});
