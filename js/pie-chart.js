nv.addGraph(function() {
	var chart = nv.models.pieChart()
		.x(function(d) { return d.nombre })
		.y(function(d) { return d.contar })
		.showLabels(true)
		.width(600)
		.donut(true)
		.donutRatio(0.35);

	d3.select('#chart svg')
		.datum(vm.datos)
		.transition().duration(350)
		.call(chart);

	return chart;
});