app.controller('actorsAddCtrl', function($scope, actorsService){
    $scope.data = {
    	firstName: '', 
    	lastName: ''
    };

    $scope.submitForm = function() {
    	console.log('hola');
    	actorsService.create($scope.data)
    	.success(function(data){
            console.log('Listo!');
        })
        .error(function(error){
        	console.log('Error');
        });
        console.log('kie');
    };
});