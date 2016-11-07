app.controller("ArtistasCreateCtrl", function($scope, ArtistaService){
    var vm = this;
    vm.festivales = [];

    getFestivales();
    function getFestivales() {
        ArtistaService.getResources().then(function(data) {
            vm.festivales = data.data;
         });
    }
});