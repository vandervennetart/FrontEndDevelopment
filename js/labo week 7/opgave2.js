const kleur = function(x, y, kleur){
    console.log(kleur)
    fetch(`https://rplace.bartdelrue.ikdoeict.be/px/${+x}/${+y}`, {
        method: "GET",
    })
        .then((response) => {
            if (!response.ok) throw new Error(response.statusCode);
            return response.json();
        })
        .then((json) => json.key)
        .then((k) => {
            return fetch(
                `https://rplace.bartdelrue.ikdoeict.be/px/${+x}/${+y}`,
                {
                    method: "PUT",
                    body: JSON.stringify({
                        key: k,
                        color: kleur,
                    }),
                    headers: {
                        "Content-type": "application/json; charset=UTF-8",
                    },
                }
            );
        })
        .catch((e) => console.log(e));
}




import { FormValidator } from "./Formvalidator.js";

const form = document.querySelector("#downloadForm");
if (!form) {
    throw new Error("form undefined");
}

const formValidator = new FormValidator(form);

formValidator.addValidator({
    name: "x",
    method: (field) => field.value.trim().length > 0,
    message: "x is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "y",
    method: (field) => field.value.trim().length > 0,
    message: "y is een verplicht veld en werd niet ingevuld",
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const x = document.querySelector("#x").value;
    const y = document.querySelector("#y").value;
    const c = document.querySelector("#color").value;
    console.log(x, y);
    
    kleur(x, y, c)

    this.reset();
});

export const oef1 = function () {
    const color = "#FFFFFF";
    for (let i = 0; i < 100; i++) {
        console.log("a")
        kleur(i, i, color);
        
    }
};
