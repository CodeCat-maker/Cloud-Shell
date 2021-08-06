const express = require('express');
app = express();
const http = require('http').Server(app);
app.set("view engine", 'ejs');
app.use(express.static("static"));

http.listen(3000, () => {
    console.log("serving on 3000 port");
})
app.get('/', (req, res) => {

    res.render("index");

})

app.get('/cloud', (req, res) => {

    res.render("cloud");

})

app.use((req, res) => {
    res.status(400).send("404");
})
