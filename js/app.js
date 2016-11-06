var app = angular.module("angularSpa", ["ngRoute"])
	.constant('MyConfig', {
		urlBase: 'http://alter-aspire-vn7-571g:8080/grupo_1_tbd-master/'
	})
	.service('FestivalService', function($http, MyConfig){
		var resource = "festivales";

		this.getResource = function(id){
			return $http.get( MyConfig.urlBase + resource + '/' + id);
		};
		this.getResourceArtist = function(id){
			return $http.get( MyConfig.urlBase + resource + '/' + id + '/artistas');
		};
		this.getResources = function(){
			return $http.get( MyConfig.urlBase + resource);
		};
	})
	.service('ArtistaService', function($http, MyConfig){
		var resource = "artistas";

		this.getResource = function(id){
			return $http.get( MyConfig.urlBase + resource + '/' + id);
		};
		this.getResourceArtist = function(id){
			return $http.get( MyConfig.urlBase + resource + '/' + id + '/festivales');
		};
		this.getResources = function(){
			return $http.get( MyConfig.urlBase + resource);
		};
	})
	.config(function($routeProvider) {
		$routeProvider
		.when("/home", {
			templateUrl: "views/main.html",
			controller: "MainCtrl"
		})
		.when("/festivales", {
			templateUrl: "views/festivales/festivales.html",
			controllerAs: "vm",
			controller: "FestivalesListCtrl"
		})
		.when("/festivales/:id", {
			templateUrl: "views/festivales/show.html",
			controllerAs: "vm",
			controller: "FestivalesViewCtrl"
		})
		.otherwise({
			redirectTo: "/home"
		});
	});