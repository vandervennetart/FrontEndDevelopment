import {FormValidator} from "./Formvalidator.js";

const form = document.querySelector("#downloadForm");
if(!form){
    throw new Error("form undefined");
} 



const formValidator = new FormValidator(form);

formValidator.addValidator({
    name: "firstname",
    method: (field) => field.value.trim().length > 0,
    message: "Voornaam is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "name",
    method: (field) => field.value.trim().length > 0,
    message: "Naam is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "gender",
    method: (field) => field.value.trim().length > 0,
    message: "Geslacht is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "zipcode",
    method: (field) =>
        field.value.trim().match(/^\d{4}$/) || field.value.trim().length === 0,
    message: "Postcode moet uit exact 4 cijfers bestaan",
});

formValidator.addValidator({
    name: "email",
    method: (field) =>
        field.value
            .trim()
            .match(
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            ),
    message: "E-mail voldoet niet aan het opgegeven patroon",
});

formValidator.addValidator({
    name: "privacy",
    method: (field) => field.checked ,
    message: "Deze checkbox is verplicht en is niet aangeduid",
});



form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Submit gelukt! Geen errors!");
    this.reset();
});

