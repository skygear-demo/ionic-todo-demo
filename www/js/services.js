angular.module('app.services', [])

.factory('$skygear', [function(){
    skygear.config({
        'apiKey': '94a9d05a1b6146c3a7455cb3f146546c',
        'endPoint': 'https://todo.staging.skygeario.com/'
    });
    return skygear;
}])

.service('BlankService', [function(){

}]);