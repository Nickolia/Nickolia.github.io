var app = angular.module('StarterApp', [
        'ngRoute',
        'ngResource',
        'ngMaterial',
        'hljs'
    ])
    .config(function ( $routeProvider, $locationProvider ) {
        'use strict';
        $routeProvider
            .when('/', {
                templateUrl: 'source/template/index.html',
                controller: "Index"
            })
            .when('/post/:post_id', {
                templateUrl: 'source/template/post.html',
                controller: "Post"
            });
    })
    .config(function (hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    });