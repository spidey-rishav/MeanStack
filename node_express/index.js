http = require('http')
http.createServer(
    function(req, res){
        res.end("this is server")
    }
)
server.listen(3000,
    console.log("server running...")
)