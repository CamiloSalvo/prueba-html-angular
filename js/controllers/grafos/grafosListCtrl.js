app.controller("grafosListCtrl", function($scope, UsuarioService){
	var vm = this;
	vm.dataLoaded = false;
	vm.leaders = [];
	vm.spreaders = [];
	vm.showSpreader = false;
	vm.showLeader = false;

	UsuarioService.getLeaders()
	.then(function(data) {
		vm.leaders = data;
		UsuarioService.getSpreaders()
		.then(function(data) {
			vm.spreaders = data;
			vm.dataLoaded = true;
		})
	})

	vm.spreaders = function() {
		vm.showSpreader = true;
		vm.showLeader = false;
	};

	vm.leaders = function() {
		vm.showSpreader = false;
		vm.showLeader = true;
	};
});