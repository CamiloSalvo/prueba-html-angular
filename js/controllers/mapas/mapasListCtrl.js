app.controller("mapasListCtrl", function($scope){

	var vm = this;

	vm.coloresLolla = ['#59b5b1'];
	vm.coloresCream = [];
	vm.coloresFauna = [];
	vm.coloresCumbre = [];
	vm.coloresFrontera = [];
	vm.coloresFiis = [];
	vm.coloresDefqon = [];

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