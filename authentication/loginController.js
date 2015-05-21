/**
 * login.Controller Module
 *
 * Description
 */

angular.module('login.Controller', [])

.controller('authCtrl', function ($scope, $rootScope, firebaseAuth, $state) {
    //show signup form if value = true
    $scope.isSignup = false;

    $scope.signUp = function () {
        $scope.auth.$createUser({
          email: $scope.email,
          password: $scope.password
        }).then(function () {
          $scope.isSignup = false;
          alert("singup successfully");
        }).error(function () {
          elert("unable to signup")
        })
      } //end function signUp



    $scope.signIn = function () {
        $scope.auth.$authWithPassword({
          email: $scope.email,
          password: $scope.password
        }).then(function (user) {
          $state.go('main');
        }).catch(function (error) {
          $scope.announce = "fail to login due to wrong password and username";
        })
      } //end function signIn

    $scope.logout = function () {
        $scope.auth.$unauth();
      } //end function logout

    $scope.authGoogle = function () {
        $scope.auth.$authWithOAuthPopup("google").then(function (authData) {
          console.log("Logged in as:", authData.uid);
          console.log($scope.googleName);
        }).catch(function (error) {
          console.error("Authentication failed:", error);
        });
      } //end function authGoogle
  }) //End authCtrl
