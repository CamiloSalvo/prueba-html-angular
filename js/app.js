var app = angular.module("angularSpa", ["ngRoute"])
	.config(function($routeProvider) {
		var urlBase = "'http://alter-aspire-vn7-571g:8080/grupo_1_tbd-master/";
		$routeProvider
		.when("/home", {
			templateUrl: "views/main.html",
			controller: "MainCtrl"
		})
		.when("/festivales/:id", {
			templateUrl: "views/festivales/festivales.html",
			controller: "FestivalesListCtrl"
		})
		.otherwise({
			redirectTo: "/home"
		});
	});