angular.module('app.controllers', [])
  
.controller('logInCtrl', ['$scope', '$stateParams', '$skygear', '$ionicPopup', '$state',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $skygear, $ionicPopup, $state) {

    $scope.user = {};
    $scope.login = function () {
        if ($scope.user.username && $scope.user.password) {
            $skygear.loginWithUsername($scope.user.username, $scope.user.password).then(function () {
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
   
.controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('toDoListCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('addItemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('editItemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('itemDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 