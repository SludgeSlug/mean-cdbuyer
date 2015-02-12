var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl : 'views/search.html',
            controller  : 'searchController'
        })

        .when('/results/:searchterm', {
            templateUrl : 'views/results.html',
            controller  : 'resultsController'
        })
        
        .when('/basket', {
            templateUrl : 'views/basket.html',
            controller  : 'basketController'
        })
});