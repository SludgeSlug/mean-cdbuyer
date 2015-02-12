app.controller('resultsController', function($scope, $rootScope, $routeParams, basketService) {
    
    $scope.searchterm = $routeParams.searchterm;
    $scope.albums = getTestData();
    
    $scope.addToBasket = function(album) {
        basketService.add(album);
        $rootScope.numberOfBasketItems = basketService.numberOfItems();
    };
    
});

function getTestData() {
    
    return [
            {"id": 1, "artist": "Black Sabbath", "title": "Master of Reality", "price": 5.90},
            {"id": 2, "artist": "Saint Vitus", "title": "Born too Late", "price": 4.80},
            {"id": 3, "artist": "Slayer", "title": "Seasons in the Abyss", "price": 6.10}
        ];
    
}