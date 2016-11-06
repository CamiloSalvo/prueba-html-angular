var app = angular.module('angularSpa', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
    .when('/actors', {
        templateUrl: 'views/actors/index.html',
        controller: 'actorsListCtrl'
    })
    .when('/actors/create', {
        templateUrl: 'views/actors/form.html',
        controller: 'actorsAddCtrl'
    })
    .otherwise({
        redirectTo: '/home'
      });
});