var app = angular.module('StarterApp', [
        'ngRoute',
        'ngResource',
        'ngSanitize',
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
            .when('/post/:post_url', {
                templateUrl: 'source/template/post.html',
                controller: "Post"
            })
            .when('/post/:post_url/:sub_post_url', {
                templateUrl: 'source/template/sub_post.html',
                controller: "SubPost"
            });
    })
    .config(function (hljsServiceProvider) {
        hljsServiceProvider.setOptions({
            // replace tab with 4 spaces
            tabReplace: '    '
        });
    });