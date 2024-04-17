"use strict";
(function () {
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

})();
