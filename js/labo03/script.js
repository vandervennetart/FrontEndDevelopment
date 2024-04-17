"use strict";
(function () {
    let halfjes = [];
    for (let i = 0.5; i <= 5; i += 0.5) {
        halfjes.push(i);
    }

    console.log(halfjes);
    halfjes.forEach((e) => {
        console.log(e);
    });

    console.log(halfjes.filter((e) => !(e % 2)));

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

    let arrDrie = [];
    for (let i = 0; i < 100; i++) {
        arrDrie.push(Math.round(Math.random() * 100 - 50));
    }

    const getallenTellen = function (numbers = []) {
        let result = {
            positief: 0,
            negatief: 0,
            nul: 0,
        };

        result.positief = numbers.filter((e) => e > 0).length;
        result.negatief = numbers.filter((e) => e < 0).length;
        result.nul = numbers.filter((e) => !e).length;

        return result;
    };

    const resultaat = getallenTellen(arrDrie);

    console.log(`Het aantal positieve getallen is: ${resultaat.positief}
Het aantal negatieve getallen is: ${resultaat.negatief}
Het aantal nullen is: ${resultaat.nul}`);

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
