var services = angular.module('services', ['ngResource']);

services.factory('ValidationService', ['$resource', function ($resource) {
       return $resource('/api/:method/:number',
           {
               number:'@number'
           },
           {
               validateNumber: {
                   method: 'GET',
                   params: {
                       method: 'validate'
                   }
               }
           }
       );
}]);