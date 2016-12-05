app.controller("mapasListCtrl", function($scope){

	var vm = this;

	function mapa_de_calor() {

		console.log("Hola!")

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

		console.log("Chao!")
	}

	mapa_de_calor()

});