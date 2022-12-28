const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World!");
});

app.get("/names/:name", (req, res) => {
    res.send("Hello " + req.params.name);
});

const cities = require("./routes/cities");
app.use('/cities/', cities);

app.listen(3000);
