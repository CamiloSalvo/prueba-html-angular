app.controller("InfografiaListCtrl", function($scope, TweetService){
    var vm = this;
    vm.datos = 0;
    vm.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function(d){return d.nombre;},
            y: function(d){return d.contador;},
            showLabels: true,
            duration: 500,
            labelThreshold: 0.05,
            labelSunbeamLayout: true,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

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