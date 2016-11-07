app.controller("FestivalesViewCtrl", function($scope, $routeParams, FestivalService){
    var vm = this;
    vm.festival = {};
    vm.artistas = {};

    getFestival();
    getFestivalArtist();

    function getFestival() {
        FestivalService.getResource($routeParams.id).then(function(data) {
            vm.festival = data.data;
        });
    }

    function getFestivalArtist() {
        FestivalService.getResourceArtist($routeParams.id).then(function(data) {
            vm.artistas = data.data;
            console.log('data', data);
        });
    }
});