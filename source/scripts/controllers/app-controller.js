app.controller('AppCtrl', ['$scope', '$mdSidenav','$location','jsonSvc', function($scope, $mdSidenav,$location,jsonSvc){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.posts = [];
    jsonSvc.getJsonData('source/json/post.json').then(function(data){
        $scope.posts = data.post;
    },function(errors){})
    $scope.goToPagePost = function(url){
        $location.url('/#!/post/'+url)
    }
}]);