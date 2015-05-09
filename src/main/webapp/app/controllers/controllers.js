var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService',
    function ($scope, $log, ValidationService) {

        $scope.areaCodeRegExp =/^\+\d{2}/;

        $scope.sms = false;

        $scope.validatePhoneNumber = function() {
            ValidationService.validateNumber({ number: $scope.phoneNumber },
                function(success) {
                    //$log.info("success! ", success);
                    if ($scope.sms && success.type === 'FIXED_LINE_OR_MOBILE') {
                        $log.info("prompt modal dialog for number: ", success.number);
                    }
                },
                function(error) {
                    $log.info("error! ", error);
                    //TODO check for type.UNKNOWN and display feedback
                }
            );
        }
    }]);