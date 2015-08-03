app.controller('SubPost', ['$scope', '$rootScope', '$routeParams', function($scope,$rootScope, $routeParams){
    var color_background = ["red", "green", "darkBlue", "blue", "yellow", "pink", "deepBlue","purple","lightPurple"];
    $scope.post_data = _.findWhere($scope.posts, {url: $routeParams.post_url});
    $scope.sub_post_data = _.findWhere($scope.post_data.posts, {url: $routeParams.sub_post_url});
    $rootScope.page = {
        name: $scope.sub_post_data.name,
        index: false
    }

}]);