import http from "http";
import * as fs from "fs";
// import { status } from "./status.js";
let status
try {
    status = JSON.parse(
        fs.readFileSync(new URL("./status.js", import.meta.url))
    );
} catch (error) {
    status = {red:0, blue:0}
}


const server = http.createServer((req, res) => {
    // De `OPTIONS`-methode is een HTTP-verzoeksmethode die wordt gebruikt om communicatie-opties
    // voor een doelresource te beschrijven. Clients gebruiken deze methode vaak om te bepalen welke
    // HTTP-methoden en andere opties de server ondersteunt voor een bepaalde URL. Een veelvoorkomende
    // toepassing van de `OPTIONS`-methode is in het kader van Cross-Origin Resource Sharing (CORS).

    // CORS staat voor Cross-Origin Resource Sharing. Het is een mechanisme dat browsers gebruiken om
    // beperkte bronnen (zoals lettertypen of API's) op een andere oorsprong (domein) op te halen dan
    // de oorsprong van het document dat de bron aanvraagt. Dit gebeurt om veiligheidsredenen: zonder
    // CORS zou een kwaadwillende website ongeautoriseerde verzoeken kunnen doen naar een andere site
    // waarop de gebruiker is ingelogd, en toegang krijgen tot gevoelige gegevens.

    // De `OPTIONS`-methode komt in beeld wanneer een zogenaamde preflight-verzoek wordt gedaan. Een
    // preflight-verzoek wordt door de browser uitgevoerd voordat het daadwerkelijke CORS-verzoek
    // wordt verzonden. Dit gebeurt vooral bij verzoeken die niet eenvoudige GET- of POST-verzoeken zijn,
    // bijvoorbeeld wanneer het verzoek bepaalde headers bevat, een andere methode dan GET of POST gebruikt,
    // of data naar de server stuurt in een formaat anders dan application/x-www-form-urlencoded.

    // Bij een preflight-verzoek stuurt de browser een `OPTIONS`-verzoek naar de server om te vragen
    // welke methoden en headers de server accepteert voor het betreffende domein. De server reageert dan
    // met een antwoord dat aangeeft welke methoden en headers zijn toegestaan. Als de server toestaat wat
    // de browser wil doen, wordt het daadwerkelijke verzoek verzonden. Als de server dit niet toestaat,
    // wordt het verzoek geblokkeerd door de browser.

    // Samenvatting:
    // - `OPTIONS`-methode: gebruikt om de communicatiemogelijkheden van een server te achterhalen.
    // - CORS: mechanisme dat browsers in staat stelt om cross-origin verzoeken te doen op een veilige manier.
    // - Relatie: De `OPTIONS`-methode wordt vaak gebruikt in een preflight-verzoek binnen het CORS-proces
    //   om te controleren of het daadwerkelijke verzoek toegestaan is door de server.

    const pathName = req.url;
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, PUT, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
    res.setHeader("Content-Type", "application/json")


    if (req.method === "OPTIONS") {
        // Handle preflight requests
        res.statusCode = 200;
        res.end();
        return;
    }

    if (req.method === "GET") {
        if (pathName === "/") {
            res.statusCode = 200;
            res.end(JSON.stringify(status));
            return;
        }

        if (pathName === "/red") {
            res.statusCode = 200;
            res.end(JSON.stringify({ red: status.red }));
            return;
        }

        if (pathName === "/blue") {
            res.statusCode = 200;
            res.end(JSON.stringify({ blue: status.blue }));
            return;
        }
    }
    if (req.method === "PUT") {
        if (pathName === "/red") {
            res.statusCode = 201;
            status.red++;

            fs.writeFile(
                "./status.js",
                JSON.stringify(status),
                "utf-8",
                (error, data) => {
                    if (error) {
                        console.error(error);
                    } else {
                        console.log("done!");
                    }
                }
            );

            res.end(JSON.stringify({ red: status.red }));
            return;
        }
        if (pathName === "/blue") {
            res.statusCode = 201;
            status.blue++;

            fs.promises
                .writeFile("./status.js", JSON.stringify(status), "utf-8")
                .catch((e) => console.log(e));

            res.end(JSON.stringify({ blue: status.blue }));
            return;
        }

        
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: "page not found " }));
    return;
});

server.listen(8080, () => {
    console.log("Listining to requests on http://localhost:8080");
});
