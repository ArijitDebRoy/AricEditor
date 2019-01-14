/*************************************************************************************
 * AricEditor v2.0.0
 * A minimal rich text editor
 * Author: Arijit Deb Roy (2018 March)
 **************************************************************************************/

// pre-dependencies
var $ = require('jquery');
var lodash = require('lodash');
var count = 0;

// Editor initialization function. Invoke at the time of object creation.
function EditorInit() {
    $(document.body).on('click', '.Bold', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('bold');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.Italic', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('italic');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.Underline', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('underline');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.Strike', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('strikeThrough');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.JustifyL', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('justifyLeft');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.JustifyC', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('justifyCenter');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.JustifyR', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('justifyRight');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.JistifyF', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('justifyFull');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.OL', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('insertOrderedList');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.UL', function () {
        count++;
        chkUndoBtn(this);
        document.execCommand('insertUnorderedList');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('click', '.Undo', function () {
        if (count > 0) {
            document.execCommand('undo');
            count = 0;
            var selector = '#' + $(this).parent().parent().attr('id');
            $(selector).children('.editor-btn-group').children('.Undo').prop('disabled', true);
        }
    });

    /*$('.Redo').click(function() {
        document.execCommand('redo');
    });*/

    $(document.body).on('click', '.Tab', function () {
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor').focus();
        pasteHtmlAtCaret('&nbsp;&nbsp;&nbsp;&nbsp;');
    });

    $(document.body).on('click', '.Highlight', function () {
        count++;
        chkUndoBtn(this);
        var selector = '#' + $(this).parent().parent().attr('id');
        document.execCommand("BackColor", false, "#fcf81e");
        $(selector).children('.aric-editor').find('[style="background-color: rgb(252, 248, 30);"]').attr("class", "highlight-backend");
        $(selector).children('.aric-editor').find('[style="background-color: rgb(252, 248, 30);"]').removeAttr("style");
    });

    $(document.body).on('click', '.Remove-Highlight', function () {
        count++;
        chkUndoBtn(this);
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor').find('[class="highlight-backend"]').removeAttr("class");
        $(selector).children('.aric-editor').find('span').contents().unwrap();

    });

    $(document.body).on('click', '.Del', function () {
        count++;
        chkUndoBtn(this);
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor').html('');
    });

    $(document.body).on('click', '.Source', function () {
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor-source').removeAttr('contenteditable');
        $(selector).children('.aric-editor-source').text($(selector).children('.aric-editor').html());
        $(selector).children('.aric-editor').toggleClass('active inactive');
        $(selector).children('.aric-editor-source').toggleClass('inactive active');
        $(this).toggleClass('editor-btn editor-btn-click');
    });

    $(document.body).on('dblclick', '.Source', function () {
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor-source').attr('contenteditable', 'true');
    });

    $(document.body).on('click', '.Sync', function () {
        var selector = '#' + $(this).parent().parent().attr('id');
        $(selector).children('.aric-editor').html($(selector).children('.aric-editor-source').text());
    });
}

// Validate at the time of multiple object creation init function invoke only once.
var initialize = lodash.once(EditorInit);

// __constractor of AricEditor @param: dom id
function AricEditor(id)
{
    this.id = '#'+id;
    $(this.id).append('<div class="editor-btn-group">\n' +
        '    <button class="editor-btn Bold" style="margin-left: 0.5vw" type="button" title="Bold"><b>B</b></button>\n' +
        '    <button class="editor-btn Italic" type="button" title="Italic"><i>I</i></button>\n' +
        '    <button class="editor-btn Underline" type="button" title="Underline"><u>U</u></button>\n' +
        '    <button class="editor-btn Strike" type="button" title="Strike Through"><s>S</s></button>\n' +
        '    <button class="editor-btn JustifyL" type="button" title="Left"><i class="fa fa-align-left"></i></button>\n' +
        '    <button class="editor-btn JustifyC" type="button" title="Center"><i class="fa fa-align-center"></i></button>\n' +
        '    <button class="editor-btn JustifyR" type="button" title="Right"><i class="fa fa-align-right"></i></button>\n' +
        '    <button class="editor-btn JistifyF" type="button" title="Justify"><i class="fa fa-align-justify"></i></button>\n' +
        '    <button class="editor-btn OL" type="button" title="Numbering"><i class="fa fa-list-ol"></i></button>\n' +
        '    <button class="editor-btn UL" type="button" title="Bulleting"><i class="fa fa-list-ul"></i></button>\n' +
        '    <button class="editor-btn Tab" type="button" title="Tab"><i class="fa fa-caret-right"></i></button>\n' +
        '    <button class="editor-btn Highlight" type="button" title="Highlight"><i class="fa fa-paint-brush"></i></button>\n' +
        '    <button class="editor-btn Remove-Highlight" type="button" title="Remove all Highlights"><i class="fa fa-eraser"></i></button>\n' +
        '    <button class="editor-btn Del" type="button" title="Clear All"><i class="fa fa-trash"></i></button>\n' +
        '    <button class="editor-btn Source"  type="button" title="Source Code"><b><&nbsp;></b></button>\n' +
        '    <button class="editor-btn Sync"  type="button" title="Sync Changes"><i class="fa fa-retweet"></i></button>\n' +
        '</div>\n' +
        '<div class="aric-editor active" contenteditable="true"></div><div class="aric-editor-source inactive"></div>');


    var editor = $(this.id).children('.aric-editor[contenteditable]');

    editor[0].addEventListener("paste", function(e) {
        e.preventDefault();
        if (e.clipboardData && e.clipboardData.getData) {
            var text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
            //console.log($(text));
        } else if (window.clipboardData && window.clipboardData.getData) {
            var text = window.clipboardData.getData("Text");
            insertTextAtCursor(text);
        }
    });

    initialize();

}

// Editor get instance @return: source html
AricEditor.prototype.getEditorInstance = function(){
    var id = this.id;
    var source = $(id).children('.aric-editor').html();
    return source;
}

// Editor set instance @param: html data
AricEditor.prototype.setEditorInstance = function(data){
    var id = this.id;
    var source = $(id).children('.aric-editor').html(data);
}

// destroy Editor instance
AricEditor.prototype.destroyInstance = function (){
    var id = this.id;
    $(id).children().remove();
}

/* ---------------------------------------------------HELPER FUNCTION-------------------------------------------- */

// Insert HTML at cursor position
function pasteHtmlAtCaret(html) {
    var sel, range;
    if (window.getSelection) {
        // IE9 and non-IE
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();

            // Range.createContextualFragment() would be useful here but is
            // non-standard and not supported in all browsers (IE9, for one)
            var el = document.createElement("div");
            el.innerHTML = html;
            var frag = document.createDocumentFragment(), node, lastNode;
            while ( (node = el.firstChild) ) {
                lastNode = frag.appendChild(node);
            }
            range.insertNode(frag);

            // Preserve the selection
            if (lastNode) {
                range = range.cloneRange();
                range.setStartAfter(lastNode);
                range.collapse(true);
                sel.removeAllRanges();
                sel.addRange(range);
            }
        }
    } else if (document.selection && document.selection.type != "Control") {
        // IE < 9
        document.selection.createRange().pasteHTML(html);
    }
}

// Insert HTML at cursor position
function insertTextAtCursor(text) {
    var sel, range, html;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(text));
        }
    } else if (document.selection && document.selection.createRange) {
        document.selection.createRange().text = text;
    }
}

// Undo btn toggle
function chkUndoBtn(res) {
    var selector = '#' + $(res).parent().parent().attr('id');
    if(count == 0){
        $(selector).children('.editor-btn-group').children('.Undo').prop('disabled', true);
    }
    else {
        $(selector).children('.editor-btn-group').children('.Undo').prop('disabled', false);
    }
}

module.exports = {
    AricEditor: AricEditor,
};

