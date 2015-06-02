/**
 * organization.Controller Module
 *
 * Description
 */

angular.module('organization.Controller', [])

.directive('showFocus', function ($timeout) {
  return function (scope, element, attrs) {
    scope.$watch(attrs.showFocus,
      function (newValue) {
        $timeout(function () {
          newValue && element.focus();
        });
      }, true);
  };
})


.controller('orgCtrl', function ($scope, firebaseOrg, firebaseProject, firebaseGroupMember, firebaseUrl, organization) {

    $scope.organization = firebaseOrg;
    $scope.groupMember = firebaseGroupMember;
    var userId = $scope.id;
    console.log(userId);
    var ref = new Firebase(firebaseUrl + '/users/' + userId + '/groupMember');

    ref.on("value", function (snapshot) {
      var groupArray = new Array();

      snapshot.forEach(function (data) {
        groupArray.push(data.key());
        //        console.log();


      })
      console.log(groupArray);
    })







    $scope.addOrg = function () {
      $scope.organization.$add({
        name: $scope.orgName,
        owner: $scope.id
      }).then(function (data) {
        var orgId = data.key();
        organization.addMemberToGroup(orgId, $scope.id);

        //        $scope.groupMember.$add({
        //          organizationId: orgId,
        //          member: $scope.id
        //        })
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
