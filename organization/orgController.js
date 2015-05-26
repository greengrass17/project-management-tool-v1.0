/**
 * organization.Controller Module
 *
 * Description
 */

angular.module('organization.Controller', [])



.controller('orgCtrl', function ($scope, firebaseOrg, firebaseProject) {

    $scope.organization = firebaseOrg;

    $scope.addOrg = function () {
      $scope.organization.$add({
        name: $scope.orgName,
        owner: $scope.id
      })
    }; //end function addOrg


    //add project area

    $scope.projectData = {};
    $scope.addProject = function (uid) {
        $scope.project = firebaseProject(uid);
        $scope.project.$add({
          projectName: $scope.projectData.name
        })
      } //end function addProject


  }) //End orgCtrl
