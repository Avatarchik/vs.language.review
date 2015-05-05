'use strict';
define(["require", "exports"], function (require, exports) {
    exports.snippets = [
        {
            "type": "snippet",
            "label": "column",
            "documentationLabel": "コラムのキャプション",
            "codeSnippet": "===[column] {{コラム}}\n\n{{}}\n\n===[/column]"
        },
        {
            "type": "snippet",
            "label": "list",
            "documentationLabel": "//list[識別子][キャプション][言語指定] | 通常のリスト",
            "codeSnippet": "//list[{{識別子}}][][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "listnum",
            "documentationLabel": "//listnum[識別子][キャプション][言語指定] | 通常のリストに行番号をつけたもの",
            "codeSnippet": "//listnum[{{識別子}}][][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "emlist",
            "documentationLabel": "//emlist[キャプション][言語指定] | 連番がないリスト",
            "codeSnippet": "//emlist[][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "emlistnum",
            "documentationLabel": "//emlistnum[キャプション][言語指定] | 連番がないリストに行番号をつけたもの",
            "codeSnippet": "//emlistnum[][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "source",
            "documentationLabel": "//source[ファイル名] | ソースコードを引用する場合、ファイル名が必要です",
            "codeSnippet": "//source[{{ファイル名}}]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "cmd",
            "documentationLabel": "//cmd{ ~ //} | コマンドラインの操作を示すときに使用します",
            "codeSnippet": "//cmd{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "image",
            "documentationLabel": "//image[ファイル名][キャプション][スケール] | 図を挿入します",
            "codeSnippet": "//image[{{ファイル名}}][][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "indepimage",
            "documentationLabel": "//indepimage[ファイル名][キャプション] | 番号が振られていない図を挿入します",
            "codeSnippet": "//indepimage[{{ファイル名}}][]"
        },
        {
            "type": "snippet",
            "label": "graph",
            "documentationLabel": "//graph[ファイル名][コマンド名][キャプション] | グラフ表現ツールを使った図",
            "codeSnippet": "//graph[{{ファイル名}}][{{コマンド名}}][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "table",
            "documentationLabel": "//table[識別子][キャプション] | 表",
            "codeSnippet": "//table[{{識別子}}][]{\n列1\t列2\n--------------------\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "quote",
            "documentationLabel": "//quote{ ~ //} | 引用",
            "codeSnippet": "//quote{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "footnote",
            "documentationLabel": "//footnote[識別子][キャプション] | 脚注",
            "codeSnippet": "//footnote[{{識別子}}][{{}}]"
        },
        {
            "type": "snippet",
            "label": "bibpaper",
            "documentationLabel": "//bibpaper[識別子][キャプション] | 参考文献の定義",
            "codeSnippet": "//bibpaper[{{識別子}}][]{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "lead",
            "documentationLabel": "//lead{ ~ //} | リード文",
            "codeSnippet": "//lead{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "texequation",
            "documentationLabel": "//texequation{ ~ //} | TeX式",
            "codeSnippet": "//texequation{\n{{}}\n//}"
        },
        {
            "type": "snippet",
            "label": "noindent",
            "documentationLabel": "//noindent | 空白制御",
            "codeSnippet": "//noindent"
        },
        {
            "type": "snippet",
            "label": "linebreak",
            "documentationLabel": "//linebreak | 改行",
            "codeSnippet": "//linebreak"
        },
        {
            "type": "snippet",
            "label": "pagebreak",
            "documentationLabel": "//pagebreak | 改ページ",
            "codeSnippet": "//pagebreak"
        },
        {
            "type": "snippet",
            "label": "raw",
            "documentationLabel": "//raw[|ビルダ名|内容] | 生データ行",
            "codeSnippet": "//raw[|{{ビルダ名}}|{{}}]"
        },
        {
            "type": "snippet",
            "label":"@list",
            "documentationLabel": "@<list>{program} | 「リスト1.5」のような文字列に置換される。",
            "codeSnippet": "<list>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@img",
            "documentationLabel": "@<img>{unixhistory} | 「図1.3」のような文字列に置換される。",
            "codeSnippet": "<img>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@table",
            "documentationLabel": "@<table>{ascii} | 「表1.2」のような文字列に置換される。",
            "codeSnippet": "<table>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@fn",
            "documentationLabel": "@<fn>{site} | 脚注番号に置換される。",
            "codeSnippet": "<fn>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@kw",
            "documentationLabel": "@<kw>{信任状, credential} | キーワード。太字などにして強調してください。",
            "codeSnippet": "<kw>{{{}},{{kw}}}"
        },
        {
            "type": "snippet",
            "label":"@chap",
            "documentationLabel": "@<chap>{advanced} | 「第17章」のような、章番号を含むテキストに置換される。",
            "codeSnippet": "<chap>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@title",
            "documentationLabel": "@<title>{advanced} | その章の章題に置換される。",
            "codeSnippet": "<title>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@chapref",
            "documentationLabel": "@<chapref>{advanced} | 『第17章「さらに進んだ話題」』のように、章番号とタイトルを含むテキストに置換される。",
            "codeSnippet": "<chapref>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@bou",
            "documentationLabel": "@<bou>{ふさわしい} | 傍点。",
            "codeSnippet": "<bou>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@ruby",
            "documentationLabel": "@<ruby>{直截, ちょくせつ} | ルビ。",
            "codeSnippet": "<ruby>{{{}}, {{ruby}}}"
        },
        {
            "type": "snippet",
            "label":"@ami",
            "documentationLabel": "@<ami>{重点ポイント} | 文字に対するアミかけ。",
            "codeSnippet": "<ami>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@b",
            "documentationLabel": "@<b>{どうしても} | 太字 (ボールド)。",
            "codeSnippet": "<b>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@i",
            "documentationLabel": "@<i>{どうしても} | イタリック。",
            "codeSnippet": "<i>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@strong",
            "documentationLabel": "@<strong>{どうしても} | 強調。",
            "codeSnippet": "<strong>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@em",
            "documentationLabel": "@<em>{どうしても} | 強調。",
            "codeSnippet": "<em>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@tt",
            "documentationLabel": "@<tt>{foo($bar)} | テキストをテレタイプ文字(等幅フォント)で出力する。",
            "codeSnippet": "<tt>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@tti",
            "documentationLabel": "@<tti>{FooClass} | テキストをテレタイプ文字(等幅フォント)のイタリックで出力する。",
            "codeSnippet": "<tti>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@ttb",
            "documentationLabel": "@<ttb>{BarClass} | テキストをテレタイプ文字(等幅フォント)の太字で出力する。",
            "codeSnippet": "<ttb>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@u",
            "documentationLabel": "@<u>{下線} | 下線。",
            "codeSnippet": "<u>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@br",
            "documentationLabel": "@<br>{} |  段落中改行。",
            "codeSnippet": "<br>{}"
        },
        {
            "type": "snippet",
            "label":"@m",
            "documentationLabel": "@<m>{a + \\alpha} | TeXインライン式。",
            "codeSnippet": "<m>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@icon",
            "documentationLabel": "@<icon>{samplephoto} | インライン画像。",
            "codeSnippet": "<icon>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@uchar",
            "documentationLabel": "@<uchar>{2460} | Unicode文字の出力。引数は16進数で指定する。",
            "codeSnippet": "<uchar>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@href",
            "documentationLabel": "@<href>{http://www.google.com/} | リンク。URLで指定できる",
            "codeSnippet": "<href>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@hd",
            "documentationLabel": "@<hd>{はじめに|まずわ} | 見出し番号と見出しを生成します",
            "codeSnippet": "<hd>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@column",
            "documentationLabel": "@<column>{Re:VIEWの用途いろいろ} | コラム見出し参照",
            "codeSnippet": "<column>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@comment",
            "documentationLabel": "@<comment>{Re:VIEWの用途いろいろ} | --draft付きで最終結果に出力するコメントを記述",
            "codeSnippet": "<comment>{{{}}}"
        },
        {
            "type": "snippet",
            "label":"@raw",
            "documentationLabel": "@<raw>{|ビルダ名|<span>★</span>} | そのまま出力する。「}」は「バックスラッシュ+}」でエスケープする。ビルダ名は「html」「latex」「idgxml」「top」のいずれかで、「,」で区切って複数指定することも可能。該当のビルダを使用時のみ、出力される。内容に「バックスラッシュ+n」を入れると改行に変換される。",
            "codeSnippet": "<raw>{|{{ビルダ名}}|{{}}}"
        },
        {
            "type": "snippet",
            "label":"warn",
            "documentationLabel": "#@warn(...) | 警告メッセージ。プリプロセス時にメッセージが出力される。",
            "codeSnippet": "#@warn({{}})"
        },
    ];
});
