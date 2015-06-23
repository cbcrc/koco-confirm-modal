// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define([
        'text!./confirm-modal.html',
        'i18next'
    ],
    function(template, i18n) {
        'use strict';

        var ConfirmDialog = function(settings /*, componentInfo*/ ) {
            var self = this;

            self.settings = settings;
            self.title = settings.params.title || settings.title || i18n.t('confirm-modal.please-confirm'); 
            self.message = settings.params.message;
            self.okButtonHtml = settings.params.okButtonHtml || i18n.t('confirm-modal.ok'); 
            self.cancelButtonHtml = settings.params.cancelButtonHtml || i18n.t('confirm-modal.cancel');
        };

        ConfirmDialog.prototype.ok = function() {
            var self = this;
            self.settings.close(true);
        };

        //ConfirmDialog.prototype.dispose = function() {};

        return {
            viewModel: {
                createViewModel: function(settings, componentInfo) {
                    return new ConfirmDialog(settings, componentInfo);
                }
            },
            template: template
        };
    });
