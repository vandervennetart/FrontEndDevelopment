"use strict";
(function () {
    class Target {
        constructor(knop) {
            // console.log(knop)
            knop.style.flexGrow = 1;
            knop.innerText = knop.style.flexGrow;
            knop.addEventListener("click", this.update);
        }

        update() {
            this.style.flexGrow++;
            this.innerText = this.style.flexGrow;
        }
    }

    const targets = document.querySelectorAll(".field button");

    let i = []
    targets.forEach(e => {
        console.log(e)
        i.push(new Target(e))
    });
})();
