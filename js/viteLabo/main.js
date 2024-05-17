import { helloWorld } from "hello-world-npm";

import dayjs from "dayjs";
import("dayjs/locale/nl-be");

import Chart from "chart.js/auto";

console.log(helloWorld());
const barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
fetch(`https://dummyapi.online/api/blogposts`, {
    method: "GET",
})
    .then((response) => {
        if (!response.ok) throw new Error(response.statusCode);
        return response.json();
    })
    .then((json) => {
        
        json.map((element) => {
            element.date_published = dayjs(element.date_published)
                .locale("nl-be")
                .format("dd. MMM. YYYY");
            console.log(`${element.author} - ${element.date_published}`);
            console.log();
        });
        const months = json.reduce((acc, current)=>{
            
            if (!acc[current.date_published.substring(4, 7)]) {
                acc[current.date_published.substring(4, 7)] = 0;
            }
            acc[current.date_published.substring(4, 7)] += 1
            return acc
        }, {})


        const ctx = document.querySelector("#myChart");


        new Chart(ctx, {
            type: "pie",
            data: {
                labels: Object.keys(months),
                datasets: [
                    {
                        data: Object.values(months),
                        backgroundColor: barColors,
                    },
                ],
            },
            options: {
                title: {
                    display: true,
                    text: "aantal blogposts per maand",
                },
            },
        });
    })
    .catch((e) => console.log(e));
