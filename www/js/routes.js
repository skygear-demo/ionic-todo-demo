angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('logIn', {
    url: '/login',
    templateUrl: 'templates/logIn.html',
    controller: 'logInCtrl'
  })

  .state('signUp', {
    url: '/signup',
    templateUrl: 'templates/signUp.html',
    controller: 'signUpCtrl'
  })

  .state('toDoList', {
    url: '/todo-list',
    templateUrl: 'templates/toDoList.html',
    controller: 'toDoListCtrl'
  })

  .state('addItem', {
    url: '/add-item',
    templateUrl: 'templates/addItem.html',
    controller: 'addItemCtrl'
  })

  .state('editItem', {
    url: '/edit-item',
    templateUrl: 'templates/editItem.html',
    controller: 'editItemCtrl'
  })

  .state('itemDetail', {
    url: '/item-detail',
    templateUrl: 'templates/itemDetail.html',
    controller: 'itemDetailCtrl'
  });

  $urlRouterProvider.otherwise('/login')

});