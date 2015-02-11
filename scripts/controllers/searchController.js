app.controller('searchController', ['$scope', '$location', function($scope, $location) {
    
    $scope.performSearch = function() {
        
        $location.path("/results/" + $scope.searchterm);
    };
    
}]);
