app.controller('Post', ['$scope','$rootScope', '$routeParams', function($scope,$rootScope, $routeParams){
    var color_background = ["red", "green", "darkBlue", "blue", "yellow", "pink", "deepBlue","purple","lightPurple"];
    $scope.post_data = _.findWhere($scope.posts, {url: $routeParams.post_url});
    _.each($scope.post_data.posts, function(item, index){
        item.background = color_background[(Math.floor(Math.random() * (color_background.length)))];
        item.span  = { row : 1, col : 1 };
        switch ((index.toString().charAt(index.toString().length-1)*1) + 1) {
            case 1:
            case 5:
                item.span.row = item.span.col = 2;
                break;
            case 4:
            case 10:
                item.span.col = 2;
                break;
        }
    });

    $rootScope.page = {
        name: $scope.post_data.name,
        index: false
    }
}]);