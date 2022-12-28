
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const City = require("./models/city");
const app = express();
const bodyParser = require("body-parser");

let url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, (err, db) => {
    if(err) {
        throw err;
    }
    console.log("Database created");
    db.close();
});

const mongoose = require('mongoose');

mongoose.connect(url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/city', (req, res, next) => {
    City.find().exec().then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

app.post('/city', (req, res, next) => {
    const city = new City({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        state: req.body.state,
        country: req.body.country
    });
    city.save().then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));

    res.status(201).json({
        message: "Created a /city",
        createdCity: city
    });
    next();
});

app.patch("/city/:cityId", (req, res, next) => {
    const id = req.params.cityId;
    const updateOps = {};
    for (const ops of req.body) {
      updateOps[ops.propName] = ops.value;
    }
    City.updateOne({ _id: id }, { $set: updateOps })
      .exec()
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

app.listen(3000);
