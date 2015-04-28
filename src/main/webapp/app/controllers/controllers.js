var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService',
    function ($scope, $log, ValidationService) {

        $scope.areaCodeRegExp =/^\+\d{2}/;

        $scope.validatePhoneNumber = function() {
            ValidationService.validateNumber({ number: $scope.phoneNumber },
                function(success) {
                    $log.info("success! ", success);
                    //TODO check for type: FIXED_LINE_OR_MOBILE and prompt user when checkbox checked for SMS
                },
                function(error) {
                    $log.info("error! ", error);
                    //TODO check for type.UNKNOWN and display feedback
                }
            );
        }
    }]);