"use strict";
(function () {
    class Warrior {
        #stamina;
        #skills;
        #name;
        log = [];

        constructor(stamina = 100, skills = 50, name = "anonymous warrior") {
            this.#stamina = stamina;
            this.#skills = skills;
            this.#name = name;
        }

        get stamina() {
            return this.#stamina;
        }

        get skills() {
            return this.#skills;
        }

        get name() {
            return this.#name;
        }

        get strength() {
            return this.#skills + this.#stamina * 0.2;
        }

        train() {
            this.#skills += 10;
            this.#stamina -= 5;
            this.log.push("Trained and lost 5 stamina");
        }

        #retreat() {
            this.#stamina -= 5;
            this.log.push("Forced to retreat, lost 5 stamina");
        }

        #advance() {
            this.#stamina += 20;
            this.log.push("Advancing, gained 20 stamina");
        }

        #takeHit() {
            this.#stamina -= 20;
            this.log.push("Defeated, lost 20 stamina");
        }

        static battle(attacker, defender) {
            if (attacker.strength === 0 || defender.strength === 0) {
                return "there’s no use beating a dead horse";
            }

            if (attacker.strength === defender.strength) {
                attacker.#retreat();
                return;
            }

            if (attacker.strength > defender.strength) {
                attacker.#advance();
                defender.#takeHit();
                return;
            }

            if (attacker.strength < defender.strength) {
                defender.#advance();
                attacker.#takeHit();
                return;
            }
        }
    }

    class WarriorView {
        warrior;
        #container;
        #staminaElement;
        #skillsElement;
        #logElement;

        constructor(warrior, container) {
            this.warrior = warrior;
            this.#container = container;
            this.render();
        }

        render() {
            const div = document.createElement("div");
            div.classList.add("warrior");

            div.innerHTML = `
                <h2>${this.warrior.name}</h2> 
                <p>Stamina: <span class="stamina"></span></p> 
                <p>Fighting Skills: <span class="skills"></span> <button class="train-button">Train</button> </p> 
                <ul class="log"></ul>
            `;

            this.#staminaElement = div.querySelector(".stamina");
            this.#skillsElement = div.querySelector(".skills");
            this.#logElement = div.querySelector("ul.log");

            div.querySelector(".train-button").addEventListener("click", () =>
                this.train()
            );

            this.#container.appendChild(div);

            this.update();
        }

        update() {
            this.#staminaElement.innerText = this.warrior.stamina;
            this.#skillsElement.innerText = this.warrior.skills;

            for (
                let i = this.#logElement.querySelectorAll("li").length;
                i < this.warrior.log.length;
                i++
            ) {
                const li = document.createElement("li");
                li.innerText = this.warrior.log[i];
                this.#logElement.appendChild(li);
            }
        }

        train() {
            this.warrior.train();
            this.update();
        }
    }

    const warriorContainer = document.querySelector("#warriorContainer");
    const warriors = [];
    const warriorViews = [];

    for (let i = 0; i < 5; i++) {
        warriors.push(new Warrior(100, 50, `warrior ${i + 1}`));
        warriorViews.push(new WarriorView(warriors[i], warriorContainer));
    }

    const names1 = document.querySelector("#names1");
    const names2 = document.querySelector("#names2");
    const fightBtn = document.querySelector("#fight");

    warriorViews.forEach((e) => {
        const option = document.createElement("option");
        option.setAttribute("value", e.warrior.name);
        option.innerText = e.warrior.name;

        const option2 = document.createElement("option");
        option2.setAttribute("value", e.warrior.name);
        option2.innerText = e.warrior.name;

        names1.appendChild(option);
        names2.appendChild(option2);
    });

    names1.setAttribute("size", warriorViews.length);
    names2.setAttribute("size", warriorViews.length);

    const battle = function () {
        if (!names1.value || !names2.value) return;

        const krijgerViewEen = warriorViews.find(
            (e) => e.warrior.name === names1.value
        );
        const krijgerViewTwee = warriorViews.find(
            (e) => e.warrior.name === names2.value
        );

        Warrior.battle(krijgerViewEen.warrior, krijgerViewTwee.warrior);
        krijgerViewEen.update();
        krijgerViewTwee.update();
    };

    fightBtn.addEventListener("click", battle);
})();
