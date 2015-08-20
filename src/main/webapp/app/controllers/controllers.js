var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log', 'ValidationService', 'ModalDialogService',
    function ($scope, $log, ValidationService, ModalDialogService) {

        $scope.areaCodeRegExp =/^\+\d{2}/;

        $scope.sms = false;

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

controllers.controller('MapController', ['$scope', '$log', '$window',
    function ($scope, $log, $window) {
        $log.info( 'loading MapController...' );

        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(57.708870, 11.974560),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        }

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        $scope.printMap = function() {
            $log.info( 'print map');
            $window.print();

        }
    }]);