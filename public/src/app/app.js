angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ngBoilerplate.shop',  
  'ui.router',
  'Parse',
  'ngBoilerplate.phones'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider, ParseProvider ) {
  $urlRouterProvider.otherwise( '/home' );
  ParseProvider.initialize("GskAWbvsK4OSNCrwGHhPXFOqBoK2KwF0SWHN49ff", "Xsi0jachtABTtlf5Qlt7OHE1qyeDPz1kCHMIY3PO");
})

.run( function(Parse) {
  return Parse.auth.resumeSession();
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})


;


