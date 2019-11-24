const mongoose = require('mongoose');
const Quote = mongoose.model('Quote');

module.exports = function(app){
// Point server to views
app.set('views', path.join(__dirname, 'views'));
// We're using ejs as our view engine
app.set('view engine', 'ejs');

// Here are our routes!
app.get('/', function(req, res) {
  res.render('welcome');
});

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

// END OF ROUTING...


}
