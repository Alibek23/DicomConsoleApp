var app = angular.module("dicomApp", []);
app.controller("Demo", function ($scope) {
    $scope.DoSomething = function () {
        return $scope.firstName + " TaDa!";
    }
})