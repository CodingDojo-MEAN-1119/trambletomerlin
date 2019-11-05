const express = require("express");
const app = express();
const mongoose = require('mongoose');
app.use(express.static(__dirname + "/static"));
mongoose.connect('mongodb://localhost/quotes', {useNewUrlParser: true});

const quotesSchema = new quotes.Schema({
    name: String,
    quote: String
   })

const quote = mongoose.model('quote', quotesSchema);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
    res.render('index');
})
app.get('/quotes', function(req, res) {
    // Logic to grab all quotes and pass into the rendered view
    Quote.find({}, function(err, quotes) {
      if (err) { console.log(err); }
      res.render('quotes', { quotes: quotes });
    });
  });

  app.post('/quotes', function(req, res) {
    Quote.create(req.body, function(err) {
      if (err) { console.log(err); }
      res.redirect('/quotes');
    });
  });

app.listen(8000, () => console.log("listening on port 8000"));
