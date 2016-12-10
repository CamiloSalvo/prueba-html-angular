app.controller("grafosListCtrl", function($scope, UsuarioService){
	var vm = this;
	vm.dataLoaded = false;
	vm.leaders = [];
	vm.spreaders = [];

	UsuarioService.getLeaders()
	.then(function(data) {
		vm.leaders = data;
		UsuarioService.getSpreaders()
		.then(function(data) {
			vm.spreaders = data;
			vm.dataLoaded = true;
		})
	})
});