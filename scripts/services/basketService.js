app.service('basketService', ['$rootScope', function($rootScope) {
    
    var basket = []; 
 
    this.add = function(album) {
        basket.push(album);
    };
        
    this.numberOfItems = function(){
        return basket.length;
    };
    
    this.getBasketContents = function() {
        return basket;
    }
}]);