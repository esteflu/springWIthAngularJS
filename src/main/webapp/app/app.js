var app = angular.module('app', [
    'controllers'
    /*'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices',
    'phonecatDirectives'*/
]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/validation', {
                templateUrl: 'views/validation/input.html',
                controller: 'ValidationController'
            });
    }]);