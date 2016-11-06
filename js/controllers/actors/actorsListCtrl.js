app.controller('actorsListCtrl', function($scope, actorsService){
    $scope.actors = [
    	{firstName: 'hola', lastName: 'kase'},
    	{firstName: 'No', lastName: 'semeocurre'}
    ]
    function getActors(){
            actorsService.getActors()
            .success(function(data){
                $scope.actors = data;
            })
            .error(function(error){
                $scope.status = 'Error al consultar por actores';
            });
    }
    getActors();
});