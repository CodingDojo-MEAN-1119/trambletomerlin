const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    path = require('path'),
    port = 8000,
    app = express();

// Set up body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Set up database connection, Schema, model
mongoose.connect('mongodb://localhost/quoting_dojo');

const quoteSchema = new mongoose.Schema({
  name: String,
  quote: String
});

const Quote = mongoose.model('quotes', quoteSchema);

//Tramble add for route
require('./server/config/routes.js')(app);

app.listen(port);

