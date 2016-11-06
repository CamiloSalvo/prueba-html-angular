app.controller("FestivalesViewCtrl", function($scope, $routeParams, FestivalService){
    var vm = this;
    vm.festival = {};

    getFestival();
    function getFestival() {
        FestivalService.getResource($routeParams.id).then(function(data) {
            vm.festival = data.data;
        });
    }
});