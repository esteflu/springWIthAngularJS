var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService',
    function ($scope, $log, ValidationService) {
        $scope.areaCodeRegExp =/^\+\d{2}/;
        $scope.validatePhoneNumber = function() {
            $log.info("validation for: ", $scope.phoneNumber);
        }
    }]);