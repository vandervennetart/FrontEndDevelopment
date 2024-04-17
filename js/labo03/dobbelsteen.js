class Dobbelsteen {
    #laatsteWorp = -1;
    constructor(min = 1, max = 6) {
        this.min = min;
        this.max = max;
    }

    get laatsteWorp() {
        return this.#laatsteWorp == -1 ? this.min : this.#laatsteWorp;
    }

    gooi() {
        this.#laatsteWorp = Math.floor(
            Math.random() * (this.max - this.min + 1) + this.min
        );
        return this.laatsteWorp;
    }
}

const btnDobbel = document.querySelector("#btn-gooi").addEventListener("click", () =>{
    const dobbel = new Dobbelsteen(3, 10);
    let verwacht = document.querySelector("#input-gooi").value;
    let aantalWorpen = 0;

    if(isNaN(verwacht)){
        const err = document.querySelector("#error-gooi");
        err.innerHTML = "geef een geldig nummer";
        return
    }

    verwacht = +verwacht

    if (verwacht < 0) {
        const err = document.querySelector("#error-gooi");
        err.innerHTML = "geef een positief nummer";
        return
    }

    do{
        dobbel.gooi()
        aantalWorpen++
        console.log(`worp ${aantalWorpen}: ${dobbel.laatsteWorp}`)
    }while (dobbel.laatsteWorp !== verwacht)
    
    console.log(
        `In ${aantalWorpen} worpen werd ${dobbel.laatsteWorp} gedobbeld`
    );

});




