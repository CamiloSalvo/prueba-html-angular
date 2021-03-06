app.controller("InfografiaListCtrl", function($scope, TweetService){
    var vm = this;
    vm.datos = [];
    vm.dataLoaded = false;
    vm.fechaInicio = '';
    vm.fechaTermino = '';
    vm.selectTipo = 'Cantidad'

    TweetService.getFechas('2016-10-10', '2016-10-20')
    .then(function(data) {
      vm.datos = data;
      vm.dataLoaded = true;
      console.log('data', data);
    })

    vm.options = {
      chart: {
        type: "lineChart",
        height: 500,
        width: 1120, // HAY QUE AJUSTAR ESTO A CADA PANTALLA QUE USEMOS.
        x: function(d){return d3.time.format("%Y-%m-%d").parse(d.fecha);},
        y: function(d){return d.contador;},
        margin: {
          top: 0,
          right: 35,
          bottom: 70,
          left: 70
        },
        useInteractiveGuideline: true,
        dispatch: {},
        xAxis: {
          tickFormat: (function(d) {
          return d3.time.format('%Y-%m-%d')(d)
          }),
          ticks: 5,
          axisLabel: "Fechas (Día)"
        },
        xScale: d3.time.scale(),
        yAxis: {
          axisLabel: "Cantidad (#)"
        }
      },
      title: {
        enable: true,
        text: "Gráfico de Festivales"
      }
    };

    vm.options2 = {
      chart: {
        type: "lineChart",
        height: 500,
        width: 1120, // HAY QUE AJUSTAR ESTO A CADA PANTALLA QUE USEMOS.
        x: function(d){return d3.time.format("%Y-%m-%d").parse(d.fecha);},
        y: function(d){return d.score;},
        margin: {
          top: 0,
          right: 35,
          bottom: 70,
          left: 70
        },
        useInteractiveGuideline: true,
        dispatch: {},
        xAxis: {
          tickFormat: (function(d) {
          return d3.time.format('%Y-%m-%d')(d)
          }),
          ticks: 5,
          axisLabel: "Fechas (Día)"
        },
        xScale: d3.time.scale(),
        yAxis: {
          axisLabel: "Cantidad (#)"
        }
      },
      title: {
        enable: true,
        text: "Gráfico de Festivales"
      }
    };

    vm.test = function() {
      console.log('test');
      console.log('FechaInicio: ', vm.fechaInicio);
      console.log('FechaTermino: ', vm.fechaTermino);
      vm.dataLoaded = false;
      TweetService.getFechas(vm.fechaInicio, vm.fechaTermino)
      .then(function(data) {
        vm.datos = data;
        vm.dataLoaded = true;
      })
    };
});