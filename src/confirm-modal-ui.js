// Copyright (c) CBC/Radio-Canada. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

define([
        'text!./confirm-modal.html'
    ],
    function(template) {
        'use strict';

        var ConfirmDialog = function(settings /*, componentInfo*/ ) {
            var self = this;

            self.settings = settings;
            self.title = settings.params.title || settings.title || 'Veuillez confirmer';
            self.message = settings.params.message;
            self.okButtonHtml = settings.params.okButtonHtml || 'Confirmer';
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
