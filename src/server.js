require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const mongan = require('morgan');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
    `mongodb://${process.env.HOSTDB}:${process.env.PORTDB}/${process.env.NAMEDB}`,
    {useNewUrlParser: true}
)

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongan('dev'));

app.use(routes);

app.listen(3000);