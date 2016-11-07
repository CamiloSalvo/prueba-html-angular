nv.addGraph(function() {
	var chart = nv.models.pieChart()
		.x(function(d) { return d.label })
		.y(function(d) { return d.value })
		.showLabels(true)
		.labelThreshold(.05)
		.labelType("percent")
		.width(1000)
		.donut(true)
		.donutRatio(0.35);

	d3.select('#chart svg')
		.datum(arreglo)
		.transition().duration(350)
		.call(chart);

	return chart;
});