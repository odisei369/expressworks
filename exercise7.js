var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();

app.get('/search', function (req, res) {
    res.send(req.query);
    res.end();
})

app.listen(process.argv[2]);