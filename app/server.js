var express=require('express');
var moment=require('moment')

var port = process.env.port||4000;

var app=express();
app.get('/',function(req,res) {
    res.send('Hello World')
});

app.get('/test',function(req,res) {
    res.send(moment().format('MMMM Do YYYY, h:mm:ss a'))
})

var server = app.listen(port,function() {
    console.log('Listening on port ',port)
})