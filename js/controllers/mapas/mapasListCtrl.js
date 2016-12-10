app.controller("mapasListCtrl", function($scope, TweetService){

	var vm = this;
	vm.dataLoaded = false;
	vm.geoDatos = [];

	TweetService.getTweetsPorComuna()
	.then(function(data) {
		vm.geoDatos = data;
		heatMap();
		vm.dataLoaded = true;
	})


	vm.coloresLolla = ['#204644', '#2C6360', '#397F7B', '#469B97', '#59b5b1', '#72C0BC', '#8ECCC9'];
	vm.coloresCream = ['#B8003A' , '#E00047', '#FF0050', '#FF3374'];
	/*vm.coloresFauna = ['#0000FE'];*/
	/*vm.coloresCumbre = [];*/
	/*vm.coloresFrontera = [];*/
	/*vm.coloresFiis = [];*/
	/*vm.coloresDefqon = [];*/

	function heatMap() {
		var mapOptions = {
			zoom: 11,
			scrollwheel: true,
			center: new google.maps.LatLng(-33.47039910425852, -70.6475830078125),
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			mapTypeControl: false,
			mapTypeControlOptions: {
				mapTypeIds: [google.maps.MapTypeId.SATELLITE]
			}
		};

		vm.map = new google.maps.Map(document.getElementById('mapa-de-calor'), mapOptions);
		vm.map.data.loadGeoJson('js/geojson/all.geojson')
		
		vm.map.data.setStyle(function(feature) {
			//console.log("cambio en los colores");
			//console.log(feature.getProperty('NOM_COM'));
			var color = getColor(feature.getProperty('NOM_COM'));
			return {
				fillColor: color,
				fillOpacity: 0.8,
				strokeColor: '#FFFFFF'
				/*strokeWeight: 1,
				zIndex: 1*/
			};
		});
	}

	function getMaxCount(arreglo, parametro) {
		var maximo = 0;
		for (var i = 0; i < arreglo.length; i++) {
			if (arreglo[i][parametro] > maximo)
				maximo = arreglo[i][parametro];
		}
		return maximo;
	}

	function getColor(comuna) {
		var color = '';
		var colores = vm.coloresLolla;
		var maximo = getMaxCount(vm.geoDatos, "tweets")
		var dif = maximo / 7;
		angular.forEach(vm.geoDatos, function(value, key) {
			if (comuna == value.nombre) {
				if (value.tweets <= dif) color = colores[0];
				else if (value.tweets > dif && value.tweets <= dif * 2) color = colores[1];
				else if (value.tweets > dif * 2 && value.tweets <= dif * 3) color = colores[2];
				else if (value.tweets > dif * 3 && value.tweets <= dif * 4) color = colores[3];
				else if (value.tweets > dif * 4 && value.tweets <= dif * 5) color = colores[4];
				else if (value.tweets > dif * 5 && value.tweets <= dif * 6) color = colores[5];
				else if (value.tweets > dif * 6 && value.tweets <= dif * 7) color = colores[6];
			}
		});
		return color;
	}
});