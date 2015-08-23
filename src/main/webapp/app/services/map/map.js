var services = angular.module('services');

services.factory('MapService', ['$log', function ($log) {
    var service = {},
        map,
        mapPrintParams;

    service.setMapOptions = function(options) {
        mapPrintParams = {
            lat: options.center.G,
            long: options.center.K,
            zoom: options.zoom,
            mapTypeId: options.mapTypeId
        };
    };

    service.buildPrintUrl = function () {
        return "http://maps.googleapis.com/maps/api/staticmap" +
        "?center="+mapPrintParams.lat+",+"+mapPrintParams.long+""+
        "&zoom="+mapPrintParams.zoom+""+
        "&scale=false" +
        "&size=800x500" +
        "&markers=color:redS%7C"+mapPrintParams.lat+","+mapPrintParams.long+""+
        "&maptype="+mapPrintParams.mapTypeId+""+
        "&format=png" +
        "&visual_refresh=true";
    };

    service.buildMap = function(elementId, options) {
        map = new google.maps.Map(elementId, options);
        options.marker.setMap(map);
    };

    service.getMapInstance = function() {
        return map;
    };

    service.setZoom = function(zoomLevel) {
      mapPrintParams.zoom = zoomLevel;
    };

    return service;
}]);