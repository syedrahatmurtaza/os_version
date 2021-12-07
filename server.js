const server = require('express')
const os = require('os')
const app = new server()

app.get('/api/os', function(req, res){
    const osversion = os.version()
    res.send(osversion)
})

app.listen(3000, function(){
    console.log("Server Running")
})