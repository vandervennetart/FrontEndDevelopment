import http from 'http'
import * as fs from "fs";

const data = fs.readFileSync(new URL('./message.json', import.meta.url))

const server = http.createServer((req, res) => {
    const pathName = req.url

    if (pathName === '/') {
        
    }
    if (pathName === '/message') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        })
        return res.end(data)
    }
    // nothing matched -> 404
    // res.end()
})

server.listen(8080, () => {
    console.log('Listining to requests on http://localhost:8080')
})