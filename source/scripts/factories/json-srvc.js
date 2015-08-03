app
    .factory("jsonSvc", ['$resource',  '$q', function($resource,  $q) {
        var jsonService = {};

        jsonService.getJsonData =  function(url) {
            var deferred = $q.defer();
            $resource(url).get(function (data) {
                deferred.resolve(data);

            });
            return deferred.promise;
        };

        return jsonService;
    }]);
