var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService', 'ModalDialogService',
    function ($scope, $log, ValidationService, ModalDialogService) {

        $scope.areaCodeRegExp =/^\+\d{2}/;

        $scope.sms = false;
        $log.info(ModalDialogService);

        $scope.validatePhoneNumber = function() {
            ValidationService.validateNumber({ number: $scope.phoneNumber },
                function(success) {
                    if ($scope.sms && success.type === 'FIXED_LINE_OR_MOBILE') {
                        ModalDialogService.showDialog($("#myModal"));
                    }
                },
                function(error) {
                    $log.info("error! ", error);
                    //TODO check for type.UNKNOWN and display feedback
                }
            );
        }
    }]);