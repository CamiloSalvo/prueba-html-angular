app.controller("mapasListCtrl", function($scope){

	var vm = this;

	vm.coloresLolla = ['#397F7B', '#469B97', '#59b5b1', '#72C0BC'];
	vm.coloresCream = ['#B8003A' , '#E00047', '#FF0050', '#FF3374'];
	/*vm.coloresFauna = ['#0000FE'];*/
	/*vm.coloresCumbre = [];*/
	/*vm.coloresFrontera = [];*/
	/*vm.coloresFiis = [];*/
	/*vm.coloresDefqon = [];*/

	function mapa_de_calor() {
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

	}



	mapa_de_calor()

});