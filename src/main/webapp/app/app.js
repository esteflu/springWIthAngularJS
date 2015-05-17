var app = angular.module('app', [
    'controllers',
    'services'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/validation', {
                templateUrl: 'views/validation/phoneNumber.html',
                controller: 'ValidationController'
            });
    }]);