"use strict";
(function () {
    const maxVerschil = function () {
        const input = document.querySelector("#nummer").value;
        if (+input > 0 && +input < 500) {
            let arrNummers = [];
            for (let i = 0; i < 50; i++) {
                arrNummers.push(Math.round(Math.random() * 500));
            }

            const result = arrNummers.filter(
                (e) => e - input <= 50 && e - input >= -50
            ).length;

            console.log(result);
        }
    };

    const buttonNummers = document
        .querySelector("#btn-nummer")
        .addEventListener("click", maxVerschil);
})();
