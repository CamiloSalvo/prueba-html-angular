app.controller("FestivalesViewCtrl", function($scope, $routeParams, FestivalService){
    var vm = this;
    vm.festival = {};
<<<<<<< HEAD
=======

    vm.artistas = {}
    console.log($routeParams.id);
>>>>>>> 8f168b48994038d15bb72877e0ff74878a7bf2e5

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