app.controller("ArtistasListCtrl", function($scope, ArtistaService){
    var vm = this;
    vm.artistas = [];

    getArtistas();
    function getArtistas() {
        ArtistaService.getResources().then(function(data) {
            vm.artistas = data.data;
         });
    }
});