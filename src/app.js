const express = require('express');
const morgan = require('morgan');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

module.exports = app;