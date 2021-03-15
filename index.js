const express = require('express')
const path = require('path')
const app = express();
const PORT = process.env.PORT || 3000;
const unirest = require("unirest");
const http = require('http').createServer(app);

if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

app.use(express.static(path.join(__dirname,"views")))

app.get('/', function(req,res) {
    res.sendFile('views/root_redirect.html', {root: __dirname})
});

app.get('/blank', function (req, res) {
    res.sendFile('/index.html', {root: path.join(__dirname,"Views/BlankBuild")})
})

app.get('/webgl', function (req, res) {
    res.sendFile('/index.html', {root: path.join(__dirname,"Views/WebGL_Build")})
})

const run = http.listen(PORT, () => {
    console.log("server is running!");
})
