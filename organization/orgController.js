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

    console.log($scope.organization);
    //add project area

    $scope.projectData = {};
    $scope.project = firebaseProject;

    $scope.addProject = function (uid) {
        $scope.project.$add({
          projectName: $scope.projectData.name,
          org: uid
        })
      } //end function addProject


  }) //End orgCtrl
