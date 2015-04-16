var app = angular.module('app', [
    'controllers'
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/validation', {
                templateUrl: 'views/validation/form.html',
                controller: 'ValidationController'
            });
    }]);