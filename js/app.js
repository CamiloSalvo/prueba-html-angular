var app = angular.module("angularSpa", [
	"ngRoute", "nvd3", "ui.select", "ui.bootstrap"
	])
	.constant('MyConfig', {
		urlBase: 'http://localhost:8080/grupo-1-tbd/'
	})
	.service('TweetService', function($http, MyConfig){
		var resource = "twitter";

		this.getCount = function(){
			return $http.get( MyConfig.urlBase + resource + '/indicesContar');
		};
		this.getFechas = function(fechaInicio, fechaFin){
			return $http.get( MyConfig.urlBase + resource + '/indices/' + fechaInicio + '/hasta/' + fechaFin);
		};
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
		this.createResource = function(data){
			return $http.post( MyConfig.urlBase + resources, data);
		};
		this.updateResources = function(id,data){
			return $http.put( MyConfig.url + resoources + '/' + id, data);
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
		.when("/festivales/create", {
			templateUrl: "views/festivales/form.html",
			controllerAs: "vm",
			controller: "FestivalesCreateCtrl"
		})
		.when("/festivales/:id", {
			templateUrl: "views/festivales/show.html",
			controllerAs: "vm",
			controller: "FestivalesViewCtrl"
		})
		.when("/artistas", {
			templateUrl: "views/artistas/artistas.html",
			controllerAs: "vm",
			controller: "ArtistasListCtrl"
		})
		.when("/artistas/:id", {
			templateUrl: "views/artistas/show.html",
			controllerAs: "vm",
			controller: "ArtistasViewCtrl"
		})
		.when("/artistas/create", {
			templateUrl: "views/artistas/form.html",
			controllerAs: "vm",
			controller: "ArtistasCreateCtr"
		})
		.when("/infografias", {
			templateUrl: "views/infografias/index.html",
			controllerAs: "vm",
			controller: "InfografiaListCtrl",
			resolve: {
				informacion: function(TweetService) {
					return TweetService.getFechas('2016-10-24','2016-11-24').then(function(data) {
			            return data.data;
			        });
				}
			}
		})
		.otherwise({
			redirectTo: "/home"
		});
	});