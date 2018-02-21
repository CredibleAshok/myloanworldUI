(function () {

    angular.module('myapp')
   .factory('customDialog', ['$uibModal', '$templateCache', modalDialog]);

    function modalDialog($uibModal, $templateCache) {
        var service = {
            deleteDialog: deleteDialog,
            confirmationDialog: confirmationDialog,
            deleteDialogWithReason: deleteDialogWithReason,
            infoDialog: infoDialog,
            errorDialog: errorDialog,
            greenDialog: greenDialog,
            redDialog: redDialog
        };

        $templateCache.put('modalDialog.tpl.html',
            '<div>' +
            '    <div class="modal-header">' +
            '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true" data-ng-click="cancel()">&times;</button>' +
            '    </div>' +
            '    <div class="modal-body">' +
            '        <div ng-show="bigInfo!=null" class="big-info">{{bigInfo}}</div> ' +
            '        <p ng-if="bigInfo==null">{{message}}</p>' +
            '        <p ng-if="bigInfo!=null" class="text-center">{{message}}</p>' +
            '    </div>' +
            '    <div class="modal-footer">' +
            '        <button ng-show="actionText!=null" class="btn btn-default" data-ng-click="ok(\'action\')">{{actionText}}</button>' +
            '        <button ng-hide="hideOk==true||broadcastToClose===true" class="btn btn-primary" data-ng-click="ok()" ng-disabled="deleteReasons!=null && vm.deleteReasonId==null" >{{okText}}</button>' + '<button ng-show="broadcastToClose===true" class="btn btn-primary" data-ng-click="okBroadcast()">{{okText}}</button>' +
            '        <button ng-hide="bigInfo!=null" class="btn btn-default" data-ng-click="cancel()">{{cancelText}}</button>' +
            '        <button ng-show="okText==true" class="btn btn-danger" data-ng-click="cancel()">Close</button>' +
            '    </div>' +
            '</div>');

        return service;

        function deleteDialog(itemName) {
            var title = 'Confirm Delete';
            itemName = itemName || 'item';
            var msg = "Delete '" + itemName + "' ?";

            return confirmationDialog(title, msg, 'Delete');
        }

        function deleteDialogWithReason(itemName) {
            var title = 'Confirm Delete';
            itemName = itemName || 'item';
            var msg = 'Delete ' + itemName + '?';

            return confirmationDialog(title, msg, 'Delete', null, "");
        }

        function confirmationDialog(title, msg, deleteAllCondition, labelText, okText, cancelText, deleteReasons, broadcastToClose) {
            var deleteClass = "";
            if (deleteReasons != null) {
                deleteClass = 'deleteModal';
            }

            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                windowClass: 'thin-modal ' + deleteClass,
                backdrop: false,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            deleteAll: deleteAllCondition,
                            labelText: labelText,
                            okText: okText,
                            cancelText: cancelText,
                            deleteReasons: deleteReasons,
                            broadcastToClose: broadcastToClose
                        };
                    }
                }
            };

            return $uibModal.open(modalOptions).result;
        }

        function infoDialog(title, bigInfo, msg, okText) {

            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                windowClass: 'thin-modal info-modal',
                backdrop: false,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            okText: okText,
                            bigInfo: bigInfo
                        };
                    }
                }
            };

            return $uibModal.open(modalOptions).result;
        }

        function errorDialog(title, bigInfo, msg, okText) {

            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                windowClass: 'thin-modal error-modal',
                backdrop: false,
                resolve: {
                    options: function () {
                        return {
                            title: title,
                            message: msg,
                            okText: okText,
                            bigInfo: bigInfo,
                            hideOk: true,
                            cancelText: "Close"
                        };
                    }
                }
            };

            return $uibModal.open(modalOptions).result;
        }

        function greenDialog(bigInfo, okText, message, actionText) {

            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                windowClass: 'green-modal',
                backdrop: true,
                resolve: {
                    options: function () {
                        return {
                            title: ' ',
                            message: message,
                            bigInfo: bigInfo,
                            okText: okText,
                            actionText: actionText,
                        };
                    }
                }
            };

            return $uibModal.open(modalOptions).result;
        }

        function redDialog(bigInfo, okText) {

            var modalOptions = {
                templateUrl: 'modalDialog.tpl.html',
                controller: ModalInstance,
                keyboard: true,
                windowClass: 'red-modal',
                backdrop: true,
                resolve: {
                    options: function () {
                        return {
                            title: ' ',
                            message: '',
                            bigInfo: bigInfo,
                            okText: true,
                            hideOk: true,
                        };
                    }
                }
            };

            return $uibModal.open(modalOptions).result;
        }
    }


    var ModalInstance = ['$scope', '$uibModalInstance', 'options', '$rootScope',
        function ($scope, $uibModalInstance, options, $rootScope) {
            $scope.vm = {};
            $scope.vm.note = null;
            $scope.labelText = options.labelText || 'All';
            $scope.title = options.title || 'Title';
            $scope.message = options.message || '';
            $scope.okText = options.okText || 'OK';
            $scope.cancelText = options.cancelText || 'Cancel';
            $scope.actionText = options.actionText || null;
            $scope.bigInfo = options.bigInfo || null;
            $scope.ok = function (data) {
                $uibModalInstance.close({ note: $scope.vm.note, action: data });
            };
            $scope.okBroadcast = function (data) {
                $uibModalInstance.close({ action: data });
            };
            $scope.cancel = function () { $uibModalInstance.dismiss('cancel'); };
            $scope.hideOk = options.hideOk || false;
        }];
})();