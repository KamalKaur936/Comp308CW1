"use strict";

// Self-Executing Anonymous Function
// IIFE - Immmediately Invoked Function Expression
(function(){


    function Start() {
        let functionVariable="My String";
        console.log(`%cApp Started... `,
        "font-size: 20px; color: blue;");


    }

    window.addEventListener("load", Start);

})();