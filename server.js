import http from "node:http"

const server = http.createServer((req, res)=> {
    res.statusCode(200)
})