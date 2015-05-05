/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
/// <reference path="../declares.d.ts" />
'use strict';
define(["require", "exports"], function (require, exports) {
    exports.language = {
        displayName: 'Re:VIEW',
        name: 're',
        mimeTypes: [],
        fileExtensions: [],
        defaultToken: '',
        // used in the editor to insert comments (ctrl+/ or shift+alt+A)
        lineComment: '#@# ',
        blockCommentStart: '',
        blockCommentEnd: '',
        // the default separators except `@`
        wordDefinition: /(-?\d*\.\d\w*)|([^\`\~\!\#\$\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
        autoClosingPairs: [
            ['"', '"'],
            ['\'', '\''],
            ['{', '}'],
            ['[', ']'],
            ['(', ')'],
        ],
        brackets: [
            {open: '{', close: '}', token: 'delimiter.curly'},
            {open: '[', close: ']', token: 'delimiter.square'},
            {open: '(', close: ')', token: 'delimiter.parenthesis'},
            {open: '<', close: '>', token: 'delimiter.angle'}
        ],
        editorOptions: {tabSize: 4, insertSpaces: true},
        keywords: [],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        // escape sequences
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        // The main tokenizer for our languages
        tokenizer: {
            root: [
                //inline
                [/(^@<)([a-z]+)(>\{)(\\}|[^\}]*)(\})/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.review', 'keyword.review']],

                //paragraph
                [/(^={1,4})(\s.*)/, ['keyword.review', 'string.review']],

                //begin column
                [/(^={1,4}\[)(column)(\])(\s.*)/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.review']],
                [/(^={1,4}\[)(column)(\])(\{)(\\}|[^\}]*)(\})(\s.*)/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'keyword.review', 'string.regexp.review', 'keyword.review', 'string.review']],

                //end column
                [/(^={1,4})(\[\/)(column)(\])/, ['keyword.review', 'keyword.review', 'variable.parameter.review', 'keyword.review']],

                //Bullet point * 
                [/^\s+\*+\s/, 'keyword.review'],

                //Numeric bullet point like 1. 
                [/^\s+[0-9]+\.\s/, 'keyword.review'],

                //Definition list like : Alpha 
                [/(^\s*:)(\s.*)/, ['keyword.review', 'string.review']],

                //emlist / quote / etc...
                [/(^\/\/)([a-z]+)(\{)/, ['keyword.review', 'variable.parameter.review', {
                    token: 'keyword.review',
                    bracket: '@open',
                    next: '@list_close'
                }]],

                //emlist / image / table / etc...
                [/(^\/\/)([a-z]+)(\[?)([^\]]*)(\])(\[)([^\]]*)(\])(\{)/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.regexp.review', 'keyword.review', 'keyword.review', 'string.review', 'keyword.review', {
                    token: 'keyword.review',
                    bracket: '@open',
                    next: '@list_close'
                }]],
                [/(^\/\/)([a-z]+)(\[?)([^\]]*)(\])(\{)/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.regexp.review', 'keyword.review', {
                    token: 'keyword.review',
                    bracket: '@open',
                    next: '@list_close'
                }]],


                // image / etc...
                [/(^\/\/)([a-z]+)(\[?)([^\]]*)(\])(\[)([^\]]*)(\])(\[)([^\]]*)(\])(\{)/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.regexp.review', 'keyword.review', 'keyword.review', 'string.review', 'keyword.review', 'keyword.review', 'string.review', 'keyword.review', {
                    token: 'keyword.review',
                    bracket: '@open',
                    next: '@list_close'
                }]],

                // indepimage / footnote / etc...
                [/(^\/\/)([a-z]+)(\[?)([^\]]*)(\])(\[)([^\]]*)(\])/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.regexp.review', 'keyword.review', 'keyword.review', 'string.review', 'keyword.review']],
                [/(^\/\/)([a-z]+)(\[)([^\]]*)(\])/, ['keyword.review', 'variable.parameter.review', 'keyword.review', 'string.regexp.review', 'keyword.review']],
                [/(^\/\/)([a-z]+)/, ['keyword.review', 'variable.parameter.review']],

                //warn
                [/\#@[a-z]+\(.*\)/, 'warn-token.review'],
                
                //comment
                [/^\#@\#.*/, 'comment.review'],
            ],
            list_close: [
                [/^\/\/\}/, {token: 'keyword.review', bracket: '@close', next: '@pop'}]
            ]
        }
    };
});
