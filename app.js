var express = require('express')
var path = require('path')
var app = express()
var apiRouter = require('./routes/api_router')

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express.json({extended:false}))

app.use('/', apiRouter)


/*app.get('/hello', (request, response)=>{
    //console.log(request)
    var name = "leechiho"
   response.render('test', {data : name})
})  

app.get('/data',(req, res)=>{
    var sql = 'SELECT * FROM topic '
    db.query(sql, (err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result[0].description)
           // res.send(result[0].author+"수업은"+result[0].title)
           //res.send(`${result[0].author} 수업은 ${result[0].title}`)
            res.render('data', {data: result})

        }

    })
})*/

var port = 8000;
app.listen(port, ()=>{
    console.log('Server is Runing at http://localhost:8000')
})