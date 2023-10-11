// ==UserScript==
// @name         AMQ Tab Selection
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
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
