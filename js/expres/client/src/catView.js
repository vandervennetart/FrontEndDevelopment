const createCatBox = function (cat) {
    const li = document.createElement("li");
    li.classList.add("catCard");

    li.innerHTML = `
        <hgroup>
            <h3>${cat.name}</h3>
        </hgroup>
        <img src="${cat.img_url}" height=300  alt="">
        <div class="content">
            <div>
                <strong>Geslacht: </strong><span>${cat.sex}</span>
            </div>
            <div>
                <strong>Woonplaats: </strong><span>${cat.location}</span>
            </div>
            <div>
                <strong>Leeftijd: </strong><span>${cat.age / 12} jaar</span>
            </div>
        </div>
    `
    return li
}
export const addCatBox = (cat, container) => container.appendChild(createCatBox(cat))