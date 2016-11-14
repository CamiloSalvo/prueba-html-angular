app.controller("FestivalesListCtrl", function($scope, FestivalService){
    var vm = this;
    vm.dataLoaded = false;
    vm.festivales = [];

    getFestivales();
    function getFestivales() {
        FestivalService.getResources().then(function(data) {
            vm.festivales = data.data;
            vm.dataLoaded = true;
         });
    }
});