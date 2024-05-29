import {getCat, getCats, postCat} from "./src/catService.js"
import { FormValidator } from "./src/Formvalidator.js";
import {surprise} from "./src/assets/stay_out.js"
import {addCatBox} from "./src/catView.js"

const allCatsContainer = document.querySelector("#allCats")
const form = document.querySelector("form")

// todo: complete the function getCats in catService.js so you resolve an array of cats
getCats()
    .then(cats => cats.forEach(cat => addCatBox(cat, allCatsContainer)))
    .then(surprise)
// todo: catch

// todo: make a form

// todo: add a FormValidator class
// todo: add validators

// validator.addValidator({
//     name: 'img_url',
//     method: f => {
//         const imageExtensionsPattern = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
//         return imageExtensionsPattern.test(f.value.trim());
//     },
//     message: 'URL van de afbeelding moet een geldige afbeelding zijn'
// })




// todo: handle form submit event
// post cat + [get cat + show cat | show error ]
form.addEventListener('submit', function (e) {

})