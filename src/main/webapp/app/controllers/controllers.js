var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log',
    function ($scope, $log) {
        $scope.areaCodeRegExp =/^\+\d{2}/;
    }]);