var services = angular.module('services');

services.factory('MapService', [function () {
    var service = {};

    service.buildPrintUrl = function (params) {
        return "http://maps.googleapis.com/maps/api/staticmap" +
        "?center="+params.lat+",+"+params.long+""+
        "&zoom="+params.zoom+""+
        "&scale=false" +
        "&size=900x500" +
        "&maptype="+params.mapTypeId+""+
        "&format=png" +
        "&visual_refresh=true";

    };

    service.buildMap = function(elementId, options) {
        var map = new google.maps.Map(elementId, options);
        new google.maps.Marker({
            position: {lat: options.center.G, lng: options.center.K},
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'a marker!'
        });
    };

    return service;
}]);