var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(bodyParser.json());

var searches = []


app.post('/api/search', function(req, res){
    searches.push(req.body);
    res.status(200).json(searches);
})

app.get('/api/search', function(req, res){
        res.status(200).json(searches);
    } )

app.listen(3000, function(){
    console.log("working on 3000");
})