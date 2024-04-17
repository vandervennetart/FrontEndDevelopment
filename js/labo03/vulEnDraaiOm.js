"use strict";
(function () {
    let arrEen = [];
    for (let i = 0; i < 10; i++) {
        arrEen.push(Math.round(Math.random() * 10));
    }

    let arrTwee = [];
    arrEen.forEach((element) => {
        arrTwee.unshift(element);
    });

    console.log(arrEen);
    console.log(arrTwee);
})();
