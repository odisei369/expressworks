var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
var fs = require('fs');

app.get('/books', function (req, res) {
    fs.readFile(process.argv[3], function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));
        res.end();
        })
        //res.json(data.toString());

})

app.listen(process.argv[2]);