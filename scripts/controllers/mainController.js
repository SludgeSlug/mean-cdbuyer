app.controller('mainController', ['$rootScope', 'basketService', function($rootScope, basketService) {
    
     $rootScope.numberOfBasketItems = basketService.numberOfItems();
    
}]);