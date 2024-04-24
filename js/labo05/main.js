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

        retreat() {
            this.#stamina -= 5;
            this.log.push("Forced to retreat, lost 5 stamina");
        }

        advance() {
            this.#stamina += 20;
            this.log.push("Advancing, gained 20 stamina");
        }

        takeHit() {
            this.#stamina -= 20;
            this.log.push("Defeated, lost 20 stamina");
        }

        static battle(attacker, defender) {
            if (attacker.strength === 0 || defender.strength === 0) {
                return "there’s no use beating a dead horse";
            }

            if (attacker.strength === defender.strength) {
                attacker.retreat();
            }

            if (attacker.strength >= defender.strength) {
                attacker.advance();
                defender.takeHit();
            }

            if (attacker.strength <= defender.strength) {
                defender.advance();
                attacker.takeHit();
            }
        }
    }

    const warrior1 = new Warrior(100, 50, "warrior 1");
    const warrior2 = new Warrior(100, 50, "warrior 2");
    warrior1.train();
    warrior2.train();
    Warrior.battle(warrior1, warrior2);
    Warrior.battle(warrior2, warrior1);
    console.log(warrior1.log, warrior1.stamina, warrior1.skills); // -> [ "Trained and lost 5 stamina", "Forced to retreat, lost 5 stamina", "Defeated, lost 20 stamina" ] 70 60 console.log(warrior2.log, warrior2.stamina, warrior2.skills) // -> [ "Trained and lost 5 stamina", "Advancing, gained 20 stamina" ] 115 60
})();
