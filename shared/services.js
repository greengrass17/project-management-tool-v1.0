/**
 * myApp Module
 *
 * Description
 */
angular.module('myApp.services', [])

.factory('firebaseUrl', function () {
    var url = 'https://managementtool.firebaseio.com';
    return url
  }) // END ref


.factory('firebaseRef', function ($rootScope, firebaseUrl) {
  return function (arrayData) {
    var uid = $rootScope.id;
    var ref = new Firebase(firebaseUrl + '/users/' + uid + '/' + arrayData);
    return ref;
  }
})


.factory('firebaseRefNoId', function ($rootScope, firebaseUrl) {
  return function (arrayData, uid) {
    var ref = new Firebase(firebaseUrl + '/users/' + uid + '/' + arrayData);
    return ref;
  }
})
