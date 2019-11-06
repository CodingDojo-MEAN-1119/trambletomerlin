const express = require("express");
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/name_of_your_DB', {useNewUrlParser: true});

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const DogSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    color: String
    
   })

const Dog = mongoose.model('Dog', DogSchema);

app.get('/', function(req, res){
    Dog.find({}, function(err, results){
      if (err) { console.log(err); }
      res.render('index', { dogs: results });
    });
  });
  
  // Create
  app.post('/', function(req, res){
    // Create a new dog!
    Dog.create(req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/')
    });
  });
  
  // New
  app.get('/new', function(req, res){
    res.render('new');
  });
  
  // Show
  app.get('/:id', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('show', { dog: response[0] });
    });
  });
  
  app.get('/:id/edit/', function(req, res){
    Dog.find({ _id: req.params.id }, function(err, response) {
      if (err) { console.log(err); }
      res.render('edit', { dog: response[0] });
    })
  });
  
  // Update
  app.post('/:id', function(req, res){
    Dog.update({ _id: req.params.id }, req.body, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
  
  // Delete
  app.post('/:id/delete', function(req, res){
    Dog.remove({ _id: req.params.id }, function(err, result){
      if (err) { console.log(err); }
      res.redirect('/');
    });
  });
  
  



app.listen(8000, () => console.log("listening on port 8000"));
