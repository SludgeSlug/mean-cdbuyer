app.controller('mainController', function($rootScope, $window, basketService) {
    
     $rootScope.numberOfBasketItems = basketService.numberOfItems();

});