app.controller("FestivalesListCtrl", function($scope, FestivalService){
    var vm = this;
    vm.festivales = [];

    getFestivales();
    function getFestivales() {
        FestivalService.getResources().then(function(data) {
            vm.festivales = data.data;
            console.log('data', data);
        });
    }

    console.log('scope', $scope);

});