let chance = 0.1;

const fixCar = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% chance dad fixes the car
            if (Math.random() > 0.5) resolve("car fixed");
            else reject("dad didn't find the problem");
        }, 1000);
    });
};

const goToPark = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 50% chance of bad weather
            if (Math.random() > 0.5) resolve("the sun is out");
            else reject("too much rain");
        }, 1000);
    });
};

const haveIceCream = function () {
    return new Promise((resolve, reject) => {
        fetch(
            `https://dummyapi.bartdelrue.ikdoeict.be/?text=banana&noofRecords=10`,
            {
                method: "GET",
            }
        )
            .then((response) => {
                if (!response.ok) throw new Error(response.statusCode);
                response.json()
            })
            .then((json) => {
                console.log(json);
                if (Math.random() > chance) resolve("yay, ice cream!");
                else reject("can't pay");
            })
            .catch((e) => console.log(e));
    });
};

export const oef1 = function () {
    fixCar()
        .catch(() => {
            console.log("taking the bus");
            chance = 0.5;
        })
        .then(goToPark)
        .then(haveIceCream)
        .then(() => console.log("good day"))
        .catch((err) => console.log(err))
        .finally(() => console.log("bye bye now"));
};

export const oef2 = async function () {
    try {
        await fixCar();
    } catch (e) {
        console.log("taking the bus");
        chance = 0.5;
    }

    try {
        await goToPark();
        await haveIceCream();
        console.log("good day");
    } catch (e) {
        console.log(e);
    } finally {
        console.log("bye bye now");
    }
};
