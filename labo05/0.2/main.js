"use strict";
(function () {
    class Car {
        constructor(name = "Herby") {
            this.name = name;
            this.isRunning = false;
            this.interval;
        }

        turnLeft() {
            console.log(this.name + " is turning left");
        }

        turnRight() {
            // with template literals: backticks
            console.log(`${this.name} is turning right`);
        }
        start() {
            this.isRunning = true;
            console.log(`${this.name} has started`);

            clearInterval(interval);

            interval = setInterval(() => console.log("toef toef toef"), 1000);
        }
        stop() {
            this.isRunning = false;
            console.log(`${this.name} has stopped`);
            clearInterval(interval);
        }
    }

    const myCar = new Car("Ronnie");
    
    myCar.start();
    myCar.turnRight();
    myCar.turnLeft();
    setTimeout(() => myCar.stop(), 10000);
})();
