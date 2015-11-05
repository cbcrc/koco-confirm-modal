// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define([
        'i18next'
    ],
    function(i18n) {
        'use strict';

        //todo: i18n as optional dependency

        var ConfirmDialog = function(settings /*, componentInfo*/ ) {
            var self = this;

            self.settings = settings;
            self.title = settings.params.title || settings.title || i18n.t('koco-confirm-modal.please-confirm') || 'Veuillez confirmer'; 
            self.message = settings.params.message;
            self.okButtonHtml = settings.params.okButtonHtml || i18n.t('koco-confirm-modal.ok') || 'Confirmer'; 
            self.cancelButtonHtml = settings.params.cancelButtonHtml || i18n.t('koco-confirm-modal.cancel') || 'Annuler';
        };

        ConfirmDialog.prototype.ok = function() {
            var self = this;
            self.settings.close(true);
        };

        //ConfirmDialog.prototype.dispose = function() {};

        return ConfirmDialog;
    });
