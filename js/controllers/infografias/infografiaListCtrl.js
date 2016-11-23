app.controller("InfografiaListCtrl", function(informacion, $scope, TweetService){
    var vm = this;
    vm.datos = informacion;
    vm.options = {
      chart: {
        type: "lineChart",
        height: 500,
        x: function(d){return d3.time.format("%Y-%m-%d").parse(d.fecha);},
        y: function(d){return d.contador;},
        margin: {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        useInteractiveGuideline: true,
        dispatch: {},
        xAxis: {
          tickFormat: (function(d) {
          return d3.time.format('%Y-%m-%d')(d)
          }),
          axisLabel: "Fechas (Dia)"
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
});