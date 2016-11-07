app.controller("InfografiaListCtrl", function($scope, TweetService){
    var vm = this;
    vm.datos = 0;

    arreglo = [
    { "label": "Lollapalooza", "value" : 13 },
    { "label": "Creamfields", "value" : 73 },
    { "label": "Fauna Primavera", "value" : 32 },
    { "label": "La Cumbre del Rock Chileno", "value" : 90 },
    { "label": "Frontera", "value" : 30 },
    { "label": "Fiis 2016", "value" : 98 },
    { "label": "DEFQON.1", "value" : 13 }
    ];

    getCount();
    function getCount() {
        TweetService.getCount().then(function(data) {
            vm.datos = data.data;
            console.log(data);
         });
    }
});