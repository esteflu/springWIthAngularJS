var controllers = angular.module('controllers', []);

controllers.controller('ValidationController', ['$scope', '$log',
    function ($scope, $log) {
        $log.info("a validationcontroller");
    }]);