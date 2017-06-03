var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.urlencoded({extended: false}));
app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.listen(process.argv[2]);