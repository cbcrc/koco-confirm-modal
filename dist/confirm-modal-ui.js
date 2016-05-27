(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'i18next'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('i18next'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.i18next);
        global.confirmModalUi = mod.exports;
    }
})(this, function (exports, _i18next) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _i18next2 = _interopRequireDefault(_i18next);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    //todo: i18n as optional dependency

    var ConfirmDialog = function ConfirmDialog(settings /*, componentInfo*/) {
        var self = this;

        self.settings = settings;
        self.title = settings.params.title || settings.title || _i18next2.default.t('koco-confirm-modal.please-confirm') || 'Veuillez confirmer';
        self.message = settings.params.message;
        self.okButtonHtml = settings.params.okButtonHtml || _i18next2.default.t('koco-confirm-modal.ok') || 'Confirmer';
        self.cancelButtonHtml = settings.params.cancelButtonHtml || _i18next2.default.t('koco-confirm-modal.cancel') || 'Annuler';
    }; // Copyright (c) CBC/Radio-Canada. All rights reserved.
    // Licensed under the MIT license. See LICENSE file in the project root for full license information.

    ConfirmDialog.prototype.ok = function () {
        var self = this;
        self.settings.close(true);
    };

    //ConfirmDialog.prototype.dispose = function() {};

    exports.default = ConfirmDialog;
});