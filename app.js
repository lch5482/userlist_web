var express = require('express')

var app = express()

var port = 8000;
app.listen(port, function(){
    console.log(`Server is Runing at http://localhost:8080`)
})