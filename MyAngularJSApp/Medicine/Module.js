var myapp;
(function () {

    myapp = angular.module('my-medicines', []);


  //  myapp = angular.module('my-medicines', ['ngRoute']);


    //myapp.controller('HomeController', function ($scope) {  // here $scope is used for share data between view and controller
    //    $scope.Message = "Yahoooo! we have successfully done our first part.";
    //});
})();

//myapp.app.config(function ($routeProvider, $locationProvider) {
//    $routeProvider

//        .when('/', { templateUrl: '/Pages/Custom.html' })
//        .when('/Medicine', { templateUrl: '/Views/Home/Index.cshtml', controller: 'medicine-controller' })
//        .otherwise({ redirectTo: '/' });

//    $locationProvider.hashPrefix('');
//})