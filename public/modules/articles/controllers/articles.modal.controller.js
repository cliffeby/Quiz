/**
 * Created by CliffEby on 3/5/2015.
 */
'use strict';

angular.module('articles').controller('ModalCtrl', function ($scope, $modalInstance, qa) {
    $scope.setDifficultyDropdown = function (result) {
        $scope.difficulty = result;
        console.log($scope.difficulty);
        qa.difficulty = $scope.difficulty.label;
        console.log(qa.difficulty);
    };
    $scope.setTypeDropdown = function (result) {
        $scope.type = result;
        console.log($scope.type);
        qa.type = $scope.type.label;
        console.log(qa.type);
    };

    $scope.qa = qa;
    $scope.selected = {
        qa: $scope.qa[0]
    };

    $scope.ok = function () {
        $modalInstance.close($scope.selected.qa);
        console.log($scope.qa);
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
