app.controller('Index', ['$scope', '$rootScope','$mdSidenav', function($scope,$rootScope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
    var color_background = ["red", "green", "darkBlue", "blue", "yellow", "pink", "deepBlue","purple","lightPurple"];
    $scope.post_array = [];
    _.each($scope.posts, function(post){
        _.each(post.posts, function(item, index) {

            item.background = color_background[(Math.floor(Math.random() * (color_background.length)))];
            item.span = {row: 1, col: 1};
            item.parent_url = post.url;
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
            $scope.post_array.push(item);
        })
    });
    $rootScope.page = {
        name: "",
        index: true
    }
}]);