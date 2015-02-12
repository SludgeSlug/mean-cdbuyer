app.controller('basketController', function($scope, $location, basketService) {
     
     $scope.albums = basketService.getBasketContents();
     
     $scope.searchAgain = function() {
         $location.path("/");
     }
});