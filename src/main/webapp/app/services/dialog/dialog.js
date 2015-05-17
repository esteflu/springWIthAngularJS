var services = angular.module('services');

services.factory('ModalDialogService', [function () {
    var dialog = {};
    dialog.showDialog = function (id) {
        id.modal('show');

    };
    return dialog;
}]);