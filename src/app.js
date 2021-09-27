const express = require('express');
const morgan = require('morgan');
const personRoute = require('./routes/person.routes');
const authRoute = require('./routes/auth.routes');
const contentRoute = require('./routes/content.routes');
const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use('/api/v1', personRoute);
app.use('/api/v1', authRoute);
app.use('/api/v1', contentRoute);

module.exports = app;