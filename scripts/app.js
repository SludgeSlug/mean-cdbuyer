var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'views/search.html',
            controller  : 'searchController'
        })

        // route for the about page
        .when('/results/:searchterm', {
            templateUrl : 'views/results.html',
            controller  : 'resultsController'
        })
});