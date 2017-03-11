// ==UserScript==
// @name         Delete All
// @version      1.0
// @description  Delete all messages from LinkedIn
// @author       You
// @match        *://*.linkedin.com/messaging*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var deleteAllButton,
        deleteAllButtonClass,
        style;
    
    var deleteAll = function() {
        // get all delete buttons
        var deleteButtons = document.querySelectorAll('[data-control-name="clear_conversation"]'),
        // get message list container
            messageListContainer = document.getElementsByClassName('msg-conversations-container__conversations-list')[0],
            confirmButton;
        //do {
        for (var i = 0; i < deleteButtons.length; i++) {
            deleteButtons[i].click();
            setTimout(function() {
                confirmButton = document.querySelectorAll('[data-control-name="clear_conversation_confirm"]');
            },100);
            confirmButton[0].click();
        }
        messageListContainer.scrollTop = messageListContainer.Height;
        messageListContainer = document.getElementsByClassName('msg-conversations-container__conversations-list')[0];
        //} while (messageListContainer.children.length > 0);
    };
    
    // create button element, set class and add to DOM
    deleteAllButton = document.createElement('button');
    deleteAllButtonClass = 'delete-all-button';
    deleteAllButton.innerHTML = 'Delete All Messages';
    deleteAllButton.className = deleteAllButtonClass;
    deleteAllButton.addEventListener('click', deleteAll);    
    document.getElementsByTagName("body")[0].appendChild(deleteAllButton);
    
    // create style element and add to DOM
    style = document.createElement('style');
    style.innerHTML = '.' + deleteAllButtonClass + ' {position: fixed; top: 1em; right: 1em; z-index: 99999; color: white; background-color: #FCA61C; padding: 10px 20px; border: none; text-transform: uppercase; border-radius: 3em; font-family: sans-serif; font-weight: bold;}';
    document.getElementsByTagName("head")[0].appendChild(style);
})();
