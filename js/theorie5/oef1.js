"use strict";
(function () {
    const doSomething = function (ms, callback) {
        setTimeout(() => {
            const result = Math.random() > 0.5;
            if (result) callback(undefined, "hoera");
            else callback("oeps", undefined);
        }, ms);
    };

    doSomething(2000, (error, result) => {
        if (error) {
            console.log("err");
        } else {
            console.log(result);
        }
    });
})();
