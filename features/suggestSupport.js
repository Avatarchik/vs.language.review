/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../../declares.d.ts" />
'use strict';
define(["require", "exports", 'monaco', './snippets'], function (require, exports, monaco, ReVIEWSnippets) {
    var SuggestSupport = (function () {
        function SuggestSupport(ctx) {
            //this.triggerCharacters = [''];
            //this.excludeTokens = ['string', 'comment', 'numeric'];
            //this.sortBy = [{ type: 'reference', partSeparator: '/' }];
            this.modelService = ctx.modelService;
        }
        SuggestSupport.prototype.suggest = function (resource, position) {
            var model = this.modelService.getModel(resource);

            // Need to capture the word at position before we send the request.
            // The model can move forward while the request is evaluated.
            var wordAtPosition = model.getWordAtPosition(position, false);
            var versionId = model.getVersionId();

            if (versionId !== model.getVersionId()) {
                return [];
            }

            var currentWord = '';
            if (wordAtPosition && wordAtPosition.startColumn < position.column) {
                currentWord = wordAtPosition.word.substr(0, position.column - wordAtPosition.startColumn);
            }

            return [
                {
                    currentWord: currentWord,
                    suggestions: ReVIEWSnippets.snippets
                }
            ];
        };
        return SuggestSupport;
    })();
    return SuggestSupport;
});
