angular.module('app.controllers', [])
  
.controller('logInCtrl', ['$scope', '$stateParams', '$skygear', '$ionicPopup', '$state', '$items', 
function ($scope, $stateParams, $skygear, $ionicPopup, $state, $items) {

    $scope.user = {};
    $scope.login = function () {
        if ($scope.user.username && $scope.user.password) {
            $skygear.loginWithUsername($scope.user.username, $scope.user.password).then(function () {
                $items.update();
                $state.go('toDoList');
            }, function (err) {
                console.error(err);
                $ionicPopup.alert({
                    title: 'ERROR ' + err.error.code,
                    template: err.error.message
                });
            });
        } else {
            $ionicPopup.alert({
                title: 'ERROR',
                template: 'Please fill in all the fields'
            });
        }
    };

}])
   
.controller('signUpCtrl', ['$scope', '$stateParams', '$skygear', '$ionicPopup', '$state',
function ($scope, $stateParams, $skygear, $ionicPopup, $state) {

    $scope.user = {};
    $scope.signup = function () {
        if ($scope.user.username && $scope.user.password) {
            $skygear.signupWithUsername($scope.user.username, $scope.user.password).then(function () {
                $state.go('toDoList');
            }, function (err) {
                console.error(err);
                $ionicPopup.alert({
                    title: 'ERROR ' + err.error.code,
                    template: err.error.message
                });
            });
        } else {
            $ionicPopup.alert({
                title: 'ERROR',
                template: 'Please fill in all the fields'
            });            
        }
    };

}])
   
.controller('toDoListCtrl', ['$scope', '$stateParams', '$skygear', '$state', '$items', '$timeout',
function ($scope, $stateParams, $skygear, $state, $items, $timeout) {

    $scope.username = $skygear.currentUser.username;
    $scope.items = $items.items;
    $scope.logout = function () {
        $skygear.logout().then(function () {
            $state.go('logIn');
        }, function (err) {
            console.error(err);
        });
    };
    $scope.detail = function (index) {
        $items.markCurrent(index);
        $state.go('itemDetail');
    };
    $scope.delete = function (index) {
        $items.delete(index);
    };

    $items.onUpdate(function (items) {
        $timeout(function () {
            $scope.items = items;
        });
    });

}])
   
.controller('addItemCtrl', ['$scope', '$stateParams', '$items', '$state', '$ionicPopup',
function ($scope, $stateParams, $items, $state, $ionicPopup) {

    $scope.item = {};
    $scope.add = function () {
        if ($scope.item.title) {
            $items.create($scope.item);
            $state.go('toDoList');
        } else {
            $ionicPopup.alert({
                'title': 'ERROR',
                'template': 'Please at least provide a title'
            })
        }
        $state.go('toDoList');
    }

}])
   
.controller('editItemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('itemDetailCtrl', ['$scope', '$state', '$items',
function ($scope, $state, $items) {

    $scope.item = $items.current();

}])
 