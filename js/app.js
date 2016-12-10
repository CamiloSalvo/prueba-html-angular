var app = angular.module("angularSpa", [
	"ngRoute", "nvd3", "ui.select", "ui.bootstrap"
	])
	.constant('MyConfig', {
		urlBase: 'http://localhost:8080/grupo-1-tbd/'
	})
	.service('TweetService', function($http, $q, MyConfig){
		var resource = "twitter";

		this.getCount = function(){
			return $http.get( MyConfig.urlBase + resource + '/indicesContar');
		};
		this.getFechas = function(fechaInicio, fechaFin){
			return $http.get( MyConfig.urlBase + resource + '/indices/' + fechaInicio + '/hasta/' + fechaFin);
		};

		this.getTweetsPorComuna = function() {
			var defered = $q.defer();
			$http.get(MyConfig.urlBase + resource + '/tweetsporcomuna')
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(data) {
				defered.reject(err);
			});
			return defered.promise;
		};

		this.getTweetsPorFestivalyComuna = function() {
			var defered = $q.defer();
			$http.get(MyConfig.urlBase + resource + '/tweetsporfestivalcomuna')
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(data) {
				defered.reject(err);
			});
			return defered.promise;
		}
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
			return $http.put( MyConfig.url + resources + '/' + id, data);
		};
	})
	.service('UsuarioService', function($http, $q, MyConfig){
		var resource = "usuarios";

		this.getLeaders = function(){
			var defered = $q.defer();
			$http.get(MyConfig.urlBase + resource + '/leaders')
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(data) {
				defered.reject(err);
			});
			return defered.promise;
		};

		this.getSpreaders = function() {
			var defered = $q.defer();
			$http.get(MyConfig.urlBase + resource + '/spreaders')
			.success(function(data) {
				defered.resolve(data);
			})
			.error(function(data) {
				defered.reject(err);
			});
			return defered.promise;
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
					return TweetService.getFechas('2016-10-10','2016-10-20').then(function(data) {
			            return data.data;
			        });
				}
			}
		})
		.when("/grafos", {
			templateUrl: "views/grafos/index.html",
			controllerAs: "vm",
			controller: "grafosListCtrl"
		})
		.when("/mapas", {
			templateUrl: "views/mapas/index.html",
			controllerAs: "vm",
			controller: "mapasListCtrl"
		})
		.otherwise({
			redirectTo: "/home"
		});
	});