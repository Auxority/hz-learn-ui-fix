// ==UserScript==
// @name         HZ Learn - Text shadow fix
// @namespace    https://hz.nl/
// @version      1.0
// @description  try to take over the world!
// @author       Auxority (https://github.com/Auxority)
// @match        https://learn.hz.nl/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=hz.nl
// @grant        none
// ==/UserScript==

(() => {
    "use strict";

    const styleSheet = document.styleSheets[0];
    if (!styleSheet) {
        return;
    }

    styleSheet.insertRule("a { text-shadow: none !important; }", 0);
    styleSheet.insertRule("h1 { text-shadow: 0 0 3px #000 !important; }", 0);
})();
