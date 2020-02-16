const express = require('express');
const routes = require('./routes');
const mongan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(mongan('dev'));

app.use(routes);

app.listen(3000);