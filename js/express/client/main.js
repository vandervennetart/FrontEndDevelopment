import { getCat, getCats, postCat } from "./src/catService.js";
import { FormValidator } from "./src/Formvalidator.js";
import { surprise } from "./src/assets/stay_out.js";
import { addCatBox } from "./src/catView.js";

const allCatsContainer = document.querySelector("#allCats");
const form = document.querySelector("form");

getCats()
    .then((cats) => cats.forEach((cat) => addCatBox(cat, allCatsContainer)))
    .then(surprise)
    .catch((e) => console.error(e));

// todo: make a form

// todo: add a FormValidator class
// todo: add validators

if (!form) {
    throw new Error("form undefined");
}

const formValidator = new FormValidator(form);

formValidator.addValidator({
    name: "name",
    method: (field) => field.value.trim().length > 0,
    message: "name is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "location",
    method: (field) => field.value.trim().length > 0,
    message: "location is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "sex",
    method: (field) => field.value.trim().length > 0,
    message: "sex is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "age",
    method: (field) => field.value.trim().length > 0,
    message: "age is een verplicht veld en werd niet ingevuld",
});

formValidator.addValidator({
    name: "age",
    method: (field) => !isNaN(field.value.trim()),
    message: "age moet een nummer zijn en er werd geen nummer meegegeven",
});

formValidator.addValidator({
    name: "img_url",
    method: (f) => {
        const imageExtensionsPattern = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
        return imageExtensionsPattern.test(f.value.trim());
    },
    message: "URL van de afbeelding moet een geldige afbeelding zijn",
});

// todo: handle form submit event
// post cat + [get cat + show cat | show error ]
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(this).entries())
    // {
    //     name: document.querySelector("#name").value,
    //     location: document.querySelector("#location").value,
    //     sex: document.querySelector("#sex").value,
    //     age: document.querySelector("#age").value,
    //     img_url: document.querySelector("#img_url").value,
    // };
    let ok = false;
    postCat(payload)
        .then((data) => {
            // get cat by data.id
            getCat(data.data.id)
                .then((cat) => {
                    addCatBox(cat[0], allCatsContainer);
                })
                .then(surprise);
        })
        .catch((errors) => {
            formValidator.showSummary(errors.message);
        });

    this.reset();
});
