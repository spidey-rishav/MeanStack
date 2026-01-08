// import {add} from './add.js'

// const result = add(10, 20)
// console.log("sum of 2 numbers: " + result)

http = require('http') //core module
server = http.createServer((req, res) => {
    res.end("hi this is server!")
})

server.listen(3000,
    console.log("server is running...")
)