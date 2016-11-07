app.controller("ArtistasViewCtrl", function($scope, $routeParams, ArtistaService){
    var vm = this;
    vm.artista = {};
    vm.festivales = {};

    getArtist();
    getArtistFestival();

    function getArtist() {
        ArtistaService.getResource($routeParams.id).then(function(data) {
            vm.artista = data.data;
        });
    }

    function getArtistFestival() {
        ArtistaService.getResourceArtist($routeParams.id).then(function(data) {
            vm.festivales = data.data;
            console.log('data', data);
        });
    }
});