const express = require('express');
const route = express.Router();

route.use((req, res, next) => {
    console.log("Middleware used!");
    next();
})

route.get('/', (req, res) => {
    res.send("/ is hit.");
});

route.get('/:city', (req, res) => {
    res.send(req.params.city + " is hit.");
});

module.exports = route;

