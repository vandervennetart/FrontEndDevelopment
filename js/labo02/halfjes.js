"use strict";
(function (){
    let halfjes = [];
    for (let i = 0.5; i <= 5; i += 0.5) {
        halfjes.push(i);
    }

    console.log(halfjes);
    halfjes.forEach((e) => {
        console.log(e);
    });

    console.log(halfjes.filter((e) => !(e % 2)));
})()