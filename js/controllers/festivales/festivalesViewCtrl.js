app.controller("FestivalesViewCtrl", function($scope, $routeParams, FestivalService){
    var vm = this;
    vm.festival = {};
    console.log($routeParams.id);

    getFestival();
    function getFestival() {
        FestivalService.getResource($routeParams.id).then(function(data) {
            vm.festival = data.data;
            console.log('data', data);
        });
    }
});