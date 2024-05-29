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

    fetch(`https://rtddapi.artvandervennet.ikdoeict.be/${color}`, {
        method: "PUT",
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusCode);
        })
        .then(() => fetch("https://rtddapi.artvandervennet.ikdoeict.be/"))
        .then((response) => {
            if (!response.ok) throw new Error(response.statusCode);
            return response;
        })
        .then((response) => response.json())
        .then((json) => {
            red.innerText = json.red;
            red.style.flexGrow = json.red;
            blue.innerText = json.blue;
            blue.style.flexGrow = json.blue;
        })
        .catch((e) => console.error(e));
};

// use aync / await
const rtddFetchAsync = async function () {
    const color = this.dataset.color;

    try {
        await fetch(
            `https://rtddapi.artvandervennet.ikdoeict.be/${color}`,
            {
                method: "PUT",
            }
        );
        const response = await fetch(
            "https://rtddapi.artvandervennet.ikdoeict.be/"
        );
        const json = await response.json();

        red.innerText = json.red;
        red.style.flexGrow = json.red;
        blue.innerText = json.blue;
        blue.style.flexGrow = json.blue;
    } catch (e){
        console.error(e);
    }
};

red.addEventListener("click", rtddFetchAsync);
blue.addEventListener("click", rtddFetch);
