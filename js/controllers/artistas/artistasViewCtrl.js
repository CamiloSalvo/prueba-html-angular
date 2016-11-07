app.controller("ArtistasViewCtrl", function($scope, $routeParams, ArtistService){
    var vm = this;
    vm.artista = {};
    vm.festivales = {};

    getArtist();
    getArtistFestival();

    function getArtist() {
        ArtistService.getResource($routeParams.id).then(function(data) {
            vm.artista = data.data;
        });
    }

    function getArtistFestival() {
        ArtistService.getResourceArtist($routeParams.id).then(function(data) {
            vm.festivales = data.data;
            console.log('data', data);
        });
    }
});