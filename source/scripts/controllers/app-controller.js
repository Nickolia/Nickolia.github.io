app.controller('AppCtrl', ['$scope','$rootScope', '$mdSidenav','$location','jsonSvc', function($scope,$rootScope, $mdSidenav,$location,jsonSvc){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    $scope.toggleSidenavInIndex = function(menuId) {
        $scope.show_left_nav = !$scope.show_left_nav;
        !!$scope.show_left_nav?$mdSidenav(menuId).open():$mdSidenav(menuId).close();
    };
    $rootScope.page = {};
    $rootScope.page.index = $location.$$url == "/";
    $scope.posts = [];
    jsonSvc.getJsonData('source/json/post.json').then(function(data){
        $scope.posts = data.post;
    },function(errors){})
    $scope.goToPagePost = function(url){
        $location.url('/post/'+url)
    };
    $scope.goToPageSubPost = function(url,sub_url){
        $location.url('/post/'+url+'/'+sub_url)
    };
    $rootScope.$on('$routeChangeStart', function(event, toState, toParams, fromState, fromParams){
        $scope.show_left_nav = false;
    });
    $rootScope.$on('$routeChangeSuccess', function(event, toState, toParams, fromState, fromParams){
        $scope.preloader = true;
        $mdSidenav('left').close();
    });
    $rootScope.$on('$routeChangeError', function(){
        $scope.preloader = true;
        $mdSidenav('left').close();
    });
}]);