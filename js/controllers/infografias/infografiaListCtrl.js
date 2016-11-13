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

    getCount();
    function getCount() {
        TweetService.getCount().then(function(data) {
            vm.datos = data.data;
            console.log(data);
         });
    }
});