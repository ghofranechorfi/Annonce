const express = require('express');
var mysql = require('mysql');
const handlebars = require('express-handlebars');
const app = express();
const port = 5001
const path = require('path');


//app.get('/', function (req, res) {
    //res.sendFile(path.join(__dirname, '/views/index.html'));
//});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})