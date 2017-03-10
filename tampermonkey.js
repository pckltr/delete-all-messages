// ==UserScript==
// @name         Delete All
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Delete all messages from LinkedIn
// @author       You
// @match        *://*.linkedin.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var deleteAll = function() {
        var deleteButtons = document.querySelectorAll('[data-control-name="clear_conversation"]'),
            confirmButton;
        console.log('delete all click');
        for (var i = 0; i < deleteButtons.length; i++) {
            console.log('every click');
            //deleteButtons.click();
            //confirmButton = document.querySelectorAll('[data-control-name="clear_conversation_confirm"]');
            //confirmButton.click();
        }
        document.getElementsByClassname('msg-conversations-container__conversations-list')[0].scrollTop = messageList.Height;
    };
    var deleteAllButton = document.createElement('button');
    var deleteAllButtonClass = 'delete-all-button';
    deleteAllButton.innerHTML = 'Delete All Messages';
    deleteAllButton.className = deleteAllButtonClass;
    deleteAllButton.addEventListener('click', deleteAll);
    document.getElementsByTagName("body")[0].appendChild(deleteAllButton);
    var style = document.createElement('style');
    style.innerHTML = '.' + deleteAllButtonClass + ' {position: fixed; top: 1em; right: 1em; z-index: 99999; color: white; background-color: #FCA61C; padding: 10px 20px; border: none; text-transform: uppercase; border-radius: 3em; font-family: sans-serif; font-weight: bold;}';
    document.getElementsByTagName("head")[0].appendChild(style);
})();
