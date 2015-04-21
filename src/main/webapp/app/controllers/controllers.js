var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService',
    function ($scope, $log, ValidationService) {

        $scope.areaCodeRegExp =/^\+\d{2}/;

        $scope.validatePhoneNumber = function() {
            ValidationService.validateNumber({ number: $scope.phoneNumber },
                function(success) {
                    $log.info("success! ", success);
                },
                function(error) {
                    $log.info("error! ", error);
                }
            );
        }
    }]);