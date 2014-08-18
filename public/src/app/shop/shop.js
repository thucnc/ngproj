angular.module( 'ngBoilerplate.shop', [
  'ui.router',
  'ngBoilerplate.phones',
  'Parse'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'shop', {
    url: '/shop',
    views: {
      "main": {
        controller: 'ShopCtrl',
        templateUrl: 'shop/shop.tpl.html'
      }
    },
    data:{ pageTitle: 'Mobile Shop' }
  });
})
/**
 * And of course we define a controller for our route.
 */
.controller( 'ShopCtrl', function HomeController( $scope, Phones, Parse) {
    $scope.init = function () {
        Parse.callFunc("hello", {}).then(function (result){
            $scope.msg = result;
        });
    };
    
    $scope.load = function () {
      return Phones.query({
      }).then(function(phones) {
        return $scope.phones = phones;
      });
    };
    return $scope.load();
    
    
    
    

});
