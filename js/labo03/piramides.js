"use strict";
(function () {
    const maakPiramide = function () {
        const err = document.querySelector("#error-piramids");
        let input = document.querySelector("#input-piramids").value;
        
        
        if (isNaN(input)) {
            err.innerHTML = "geef een geldig nummer";
            return;
        }
        input = +input;
        if (input < 0) {
            err.innerHTML = "geef een positief nummer";
            return;
        }

        for (let i = 0; i < input; i++) {
            console.log(i+1)
            for (let j = 0; j < input; j++) {
                console.log("*".repeat(j+1))
            }
            
        }
    };

    document.querySelector("#btn-piramids").addEventListener("click", maakPiramide);
})();
