import {encode} from "html-entities";

const createCatBox = function (cat, ratingMethod = () => console.error('method ontbreekt')) {
    const li = document.createElement("li");
    li.classList.add("catCard");

    li.innerHTML = `
        <hgroup>
            <h3>${encode(cat.name)}</h3>
        </hgroup>
        <img src="${encode(cat.img_url)}" height=300  alt="">
        <div class="content">
            <div>
                <strong>Geslacht: </strong><span>${encode(cat.sex)}</span>
            </div>
            <div>
                <strong>Woonplaats: </strong><span>${encode(cat.location)}</span>
            </div>
            <div>
                <strong>Leeftijd: </strong><span>${encode(cat.age) / 12} jaar</span>
            </div>
            <form class="rating">
            <input type="hidden" name="id" value="${encode(cat.ID)}">
            <fieldset>
                <legend>Waardering</legend>
                <label class="star" title="1"> ⭐
                    <input name="rating" value="1" type="radio" ${!cat.rating || cat.rating === 1 ? 'checked' : ''}>
                </label>
                <label class="star" title="2"> ⭐
                    <input name="rating" value="2" type="radio" ${cat.rating === 2 ? 'checked' : ''}>
                </label>
                <label class="star" title="3"> ⭐
                    <input name="rating" value="3" type="radio" ${cat.rating === 3 ? 'checked' : ''}>
                </label>
                <label class="star" title="4"> ⭐
                    <input name="rating" value="4" type="radio" ${cat.rating === 4 ? 'checked' : ''}>
                </label>
                <label class="star" title="5"> ⭐
                    <input name="rating" value="5" type="radio" ${cat.rating === 5 ? 'checked' : ''}>
                </label>
            </fieldset>
            </form>
        </div>
    `

    const form = li.querySelector("form.rating")
    form.addEventListener('change', function(event) {
        const payload = Object.fromEntries((new FormData(this)).entries())
        ratingMethod(payload)
    })

    return li
}
export const addCatBox = (cat, container, ratingMethod) =>
    container.appendChild(createCatBox(cat, ratingMethod))
