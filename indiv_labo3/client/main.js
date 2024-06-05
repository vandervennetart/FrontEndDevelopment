// todo: vul alle functies uit catService.js in
import {getCat, getCats, patchCat, postCat} from "./src/catService.js";

// todo: voeg je eigen FormValidator class als module to aan je project
// import {FormValidator} from "./src/formValidator.js";

// De bestanden in /assets zijn voorzien en zouden moeten werken.
// BEHALVE een ontbrekende dependency in catView.js om XSS tegen te gaan.
// todo: installeer die ontbrekende dependency
import {addCatBox} from "./src/catView.js";
import {SortButton} from "./src/assets/sortButton.js";

/* UL-element waar alle katten in terechtkomen  */
const allCatsContainer = document.querySelector("#allCats")

/* Formulier om een kat toe te voegen, let op de ID! */
const catForm = document.querySelector("form#catform")

/* Knop om de sorteervolgorde om te draaien */
const sortElement = document.querySelector("#sort")

/* Sorteervolgorde ophalen uit localstorage */
const ORDER_KEY = 'ascending'
const ascending = localStorage.getItem(ORDER_KEY) === "true"

/* Functie om alle katten in te laden, gesorteerd */
const loadCatList = (ascending = false) => {

    const sortQueryParam = ascending ? '+rating' : '-rating'

    getCats(sortQueryParam)
        .then(cats => {

            // verwijder bestaande katten
            allCatsContainer.innerHTML = ""

            // argumenten:
            // * een kat (object)
            // * het UL-element waarin ze moeten komen
            // * de methode om de rating van een kat te 'patchen', komt uit catService.js
            cats.forEach(cat => addCatBox(cat, allCatsContainer, patchCat))

        })
        .catch(e => console.error('Error loading cats:', e))
}

/* Eerste keer katten ophalen */
loadCatList(ascending)

/*
 * De class SortButton staat in voor de display van de knop 'sortElement'
 * Pijltje omhoog vs pijltje omlaag, title past zich aan volgens de state, etc.
 */
const sort = new SortButton(sortElement, ascending)

/* Telkens wanneer op de sorteerknop geklikt wordt moet je de katten opnieuw ophalen van de server, gesorteerd */
sortElement.addEventListener('click', function () {

    // todo: effectief katten ophalen, maak gebruik van sort.isAscending
    console.warn('I\'ve clicked the sortElement and sort is now:', sort.isAscending)


    // update localstorage
    localStorage.setItem(ORDER_KEY, sort.isAscending)
})


// todo: form maken in HTML, let op de ID!
// todo: formValidator instantie aanmaken

/* todo: voeg extra validators toe: name, location, sex, age, img_url zijn allemaal verplicht
   todo: age moet een getal zijn

validator.addValidator({
    name: 'img_url',
    method: f => {
        try {
            new URL(f.value.trim())
            return true
        } catch {
            return false
        }
    },
    message: 'URL van de afbeelding moet een geldige URL zijn'
})

validator.addValidator({
    name: 'img_url',
    method: f => {
        const imageExtensionsPattern = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
        return imageExtensionsPattern.test(f.value.trim());
    },
    message: 'URL van de afbeelding moet een geldige afbeelding zijn'
})

*/

catForm.addEventListener('submit', function (e) {
// todo: post kat -> response is ID of errors (catch)
// todo: indien catch -> toon errors in HTML, mooi!
// todo: indien ID -> fetch kat met die ID -> response is één kat
// todo: voeg die kat toe aan de lijst met addCatBox
})
