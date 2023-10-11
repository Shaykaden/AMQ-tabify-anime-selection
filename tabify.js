// ==UserScript==
// @name         AMQ Tabify Anime Selection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @licence      MIT
// @description  Use the tab key to navigate through the anime selection.
// @author       Shaykaden
// @match        https://animemusicquiz.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animemusicquiz.com
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    const qpAnswerInput = document.querySelector("#qpAnswerInput");

    qpAnswerInput.addEventListener('keydown', function(e) {
        if (e.which === 9) {
            e.preventDefault();
            if (!!e.shiftKey) {
                const upArrowEvent = new KeyboardEvent("keydown", { keyCode: 38 });
                qpAnswerInput.dispatchEvent(upArrowEvent);
            } else {
                const downArrowEvent = new KeyboardEvent("keydown", { keyCode: 40 });
                qpAnswerInput.dispatchEvent(downArrowEvent);
            }
        }
    });
})();
