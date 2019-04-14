var express = require('express')
var ejs = require('ejs')
var path = require('path')

var app = express()

app.set('view engine', 'ejs')
app.set('views', './src')

app.use(express.static('static'))


app.get('/test', function (req, res) {
  res.render('test')
})

app.get('/', function (req, res) {
  res.render('index')
})




app.listen(3001, function(){
  console.log(`🍺 🍺 server is now running on port 3001`)
})