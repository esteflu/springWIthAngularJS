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

controllers.controller('MapController', ['$scope', '$log', '$window', 'MapService',
    function ($scope, $log, $window, MapService) {

        var mapOptions = {
            zoom: 8,
            center: new google.maps.LatLng(48.858093, 2.294694),
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };

        var mapPrintParams = {
            lat: mapOptions.center.G,
            long: mapOptions.center.K,
            zoom: mapOptions.zoom,
            mapTypeId: mapOptions.mapTypeId

        };

        MapService.buildMap(document.getElementById('map'), mapOptions);

        $scope.printableMapUrl = MapService.buildPrintUrl(mapPrintParams);

        $scope.printMap = function() {
            $window.print();
        };
    }]);