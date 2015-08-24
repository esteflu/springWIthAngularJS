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

        var latLong = new google.maps.LatLng(48.858093, 2.294694),
            mapOptions = {
                zoom: 8,
                center: latLong,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                marker: new google.maps.Marker({
                    position: latLong,
                    animation: google.maps.Animation.DROP,
                    title: 'a marker!'
                })
            };

        MapService.setMapOptions(mapOptions);
        MapService.buildMap(document.getElementById('map'), mapOptions);

        $scope.printMap = function() {

            setTimeout(function() {
                $window.print();
            },500);

            $scope.printableMapUrl = MapService.buildPrintUrl();
        };
        //TODO move to listener service
        google.maps.event.addListener(MapService.getMapInstance(),'zoom_changed',function(){
            MapService.setZoom(MapService.getMapInstance().getZoom());
        });
    }]);

controllers.controller('IframeController', ['$scope', '$log', '$window', '$sce',
    function($scope, $log, $window, $sce) {
        $log.info("loading iframecontroller...");
        //$scope.iframeContent = $sce.trustAsResourceUrl("views/iframe/iframeContent.html");
        $scope.iframeContent = "views/iframe/iframeContent.html";
    }]);