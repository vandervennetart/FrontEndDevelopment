"use strict";
(function () {
    const red = document.querySelector("#red");
    const blue = document.querySelector("#blue");

    // use promise.then()
    const rtddFetch = function () {
        const color = this.dataset.color;

        // 1. send a put request to `https://rtdd.bartdelrue.ikdoeict.be/${color}`, no body
        // 2. then... send a get request to `https://rtdd.bartdelrue.ikdoeict.be/status`
        // 3. then... update the buttons with the object you received
        // red.innerText = status.red;
        // red.style.flexGrow = status.red;
        // blue.innerText = status.blue;
        // blue.style.flexGrow = status.blue;
        // 4. catch errors

        fetch(`https://rtdd.bartdelrue.ikdoeict.be/${color}`, {
            method: "PUT",
        })
            .then((response) => {
                if (!response.ok) throw new Error(response.statusCode);
            })
            .then(() => fetch("https://rtdd.bartdelrue.ikdoeict.be/status"))
            .then((response) => {
                if (!response.ok) throw new Error(response.statusCode);
            })
            .then((response) => response.json())
            .then((json) => {
                red.innerText = json.red;
                red.style.flexGrow = json.red;
                blue.innerText = json.blue;
                blue.style.flexGrow = json.blue;
            })
            .catch(() => console.error("de data kan niet aangepast worden"));
    };

    // use aync / await
    const rtddFetchAsync = async function () {
        const color = this.dataset.color;

        try {
            await fetch(`https://rtdd.bartdelrue.ikdoeict.be/${color}`, {
                method: "PUT",
            });
            const response = await fetch(
                "https://rtdd.bartdelrue.ikdoeict.be/status"
            );
            const json = await response.json();

            red.innerText = json.red;
            red.style.flexGrow = json.red;
            blue.innerText = json.blue;
            blue.style.flexGrow = json.blue;
        } catch {
            console.error("de data kan niet aangepast worden");
        }
    };

    red.addEventListener("click", rtddFetchAsync);
    blue.addEventListener("click", rtddFetch);
})();
