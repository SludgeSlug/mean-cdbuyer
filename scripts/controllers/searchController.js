app.controller('searchController', function($scope, $location) {
    
    $scope.performSearch = function() {
        
        $location.path("/results/" + $scope.searchterm);
    };
    
});
