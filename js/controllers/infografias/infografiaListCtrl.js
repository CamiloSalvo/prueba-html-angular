app.controller("InfografiaListCtrl", function($scope, TweetService){
    var vm = this;
    vm.datos = 0;

    getCount();
    function getCount() {
        TweetService.getCount().then(function(data) {
            vm.datos = data.data;
            console.log(data);
         });
    }
});