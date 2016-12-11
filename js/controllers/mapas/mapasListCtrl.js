app.controller("mapasListCtrl", function($scope, TweetService){

	var vm = this;
	vm.dataLoaded = false;

	vm.geoDatosTodos = [];
	vm.geoDatosLolla = [];
	vm.geoDatosCream = [];
	vm.geoDatosFauna = [];
	vm.geoDatosCumbre = [];
	vm.geoDatosFrontera = [];
	vm.geoDatosFiis = [];
	vm.geoDatosDefqon = [];


	// más obscuro, menos valor
	vm.coloresTodos = [];
	vm.coloresLolla = ['#204644', '#2C6360', '#397F7B', '#469B97', '#59b5b1', '#72C0BC', '#8ECCC9'];
	vm.coloresCream = ['#B8003A' , '#E00047', '#FF0050', '#FF3374'];
	/*vm.coloresFauna = ['#0000FE'];*/
	/*vm.coloresCumbre = [];*/
	/*vm.coloresFrontera = [];*/
	/*vm.coloresFiis = [];*/
	/*vm.coloresDefqon = [];*/

	vm.filterSelected = "tweets";
	vm.festivalSelected = "todos";

	TweetService.getTweetsPorComuna()
	.then(function(data) {
		vm.geoDatosTodos = data;
		TweetService.getTweetsPorFestivalyComuna()
		.then(function(data) {
			vm.geoDatosLolla = data[0].comunas;
			vm.geoDatosCream = data[1].comunas;
			vm.geoDatosFauna = data[2].comunas;
			vm.geoDatosCumbre = data[3].comunas;
			vm.geoDatosFrontera = data[4].comunas;
			vm.geoDatosFiis = data[5].comunas;
			vm.geoDatosDefqon = data[6].comunas;
			heatMap();
			vm.dataLoaded = true;
		})
	})

	function heatMap() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: false,
			center: new google.maps.LatLng(-33.47039910425852, -70.6475830078125),
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			mapTypeControl: false,
		};

		vm.map = new google.maps.Map(document.getElementById('mapa-de-calor'), mapOptions);
		vm.map.data.loadGeoJson('js/geojson/all.geojson')
		
		vm.map.data.setStyle(function(feature) {
			var color = getColor(feature.getProperty('NOM_COM'), vm.filterSelected, vm.festivalSelected);
			return {
				fillColor: color,
				fillOpacity: 0.8,
				strokeColor: '#FFFFFF'
			};
		});
	}

	function getMax(arreglo, parametro) {
		var maximo = arreglo[0][parametro];
		for (var i = 1; i < arreglo.length; i++) {
			if (arreglo[i][parametro] > maximo)
				maximo = arreglo[i][parametro];
		}
		return maximo;
	}

	function getColor(comuna, filtro, festival) {
		var color = '';
		var datos = [];
		if (festival == "todos") datos = vm.geoDatosTodos;
		else if (festival == "lolla") datos = vm.geoDatosLolla;
		else if (festival == "cream") datos = vm.geoDatosCream;
		else if (festival == "fauna") datos = vm.geoDatosFauna;
		else if (festival == "cumbre") datos = vm.geoDatosCumbre;
		else if (festival == "frontera") datos = vm.geoDatosFrontera;
		else if (festival == "fiis") datos = vm.geoDatosFiis;
		else if (festival == "defqon") datos = vm.geoDatosDefqon;
		var colores = vm.coloresLolla;
		var maximo = getMax(datos, filtro);
		var dif = maximo / 7;
		angular.forEach(datos, function(value, key) {
			if (comuna == value.nombre) {
				if (value[filtro] <= dif) color = colores[0];
				else if (value[filtro] > dif && value[filtro] <= dif * 2) color = colores[1];
				else if (value[filtro] > dif * 2 && value[filtro] <= dif * 3) color = colores[2];
				else if (value[filtro] > dif * 3 && value[filtro] <= dif * 4) color = colores[3];
				else if (value[filtro] > dif * 4 && value[filtro] <= dif * 5) color = colores[4];
				else if (value[filtro] > dif * 5 && value[filtro] <= dif * 6) color = colores[5];
				else if (value[filtro] > dif * 6 && value[filtro] <= dif * 7) color = colores[6];
			}
		});
		return color;
	}

	vm.updateMap = function() {
		vm.filterSelected = vm.filterSelected;
		vm.festivalSelected = vm.festivalSelected;
		console.log(vm.festivalSelected);
		vm.map.data.setStyle(function(feature) {
			var color = getColor(feature.getProperty('NOM_COM'), vm.filterSelected, vm.festivalSelected);
			return {
				fillColor: color,
				fillOpacity: 0.8,
				strokeColor: '#FFFFFF'
			};
		});
	}
});