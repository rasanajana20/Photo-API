const express = require('express');
const cors = require('cors');
const sign = require('./controller/sign');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.get('/users', (req, res) => {
  sign.getUsers((req, res, next) => {
    res.send(users);
  });
});


app.post('/user', (req, res) => {
    sign.addUser(req.body, (callback) => {
        res.send();
    });
});


module.exports = app;
