/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports", './reviewDef', 'monaco', './features/suggestSupport'], function (require, exports, reviewDef, monaco, SuggestSupport) {

    function activate(_ctx) {

        var ctx = {
            modelService: _ctx.modelService,
            markerService: _ctx.markerService,
            configurationService: _ctx.configurationService
        };

        monaco.Modes.registerMonarchDefinition('review', reviewDef.language);
        monaco.Modes.SuggestSupport.register('review', new SuggestSupport(ctx))
    }

    exports.activate = activate;
});
