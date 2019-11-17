const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const Author = require('./models/author');

const app = express();

mongoose.connect('mongodb+srv://ttomerlin:Greatone12!@cluster0-rmvva.mongodb.net/node-angular?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connected to the damn DB!')
    })
    .catch(() => {
        console.log('connection fucking failed!')
    });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(cors()); // Think about this later.

 app.use((req,res,next) => {
     res.setHeader('Access-Control-Allow-Origin', '*');
     res.setHeader(
        'Access-Control-Allow_Headers', 
       'Origin, X-Requested-With ,Content-Type, Accept'
    );
 res.setHeader(
 "Access-Control-Allow-Methods",
"GET, POST, PATCH, PUT, DELETE, OPTIONS"
);
next();
});
app.post('/authors', (req,res, next)=>{
    const author = new Author({
        name: req.body.name
    });
    console.log(author);
    author.save().then(createdAuthor => {
        res.status(201).json({
            message: 'Author Added!',
            authorId: createdAuthor._id
        });
    });
});

app.put("/authors/:id", (req, res, next)=> {
    const author = new Author({
        _id: req.body.id,
        name: req.body.name
    });
    Author.updateOne({_id: req.params.id}, author ).then(result => {
        console.log(result);
        res.status(200).json({message: 'Author Update Successful!'});
    });
});

app.get("/authors", (req, res, next) => {
    Author.find().then(documents => {
      res.status(200).json({
        message: "Authors fetched successfully!",
        authors: documents
        });
    });
});

app.delete('/authors/:id', (req, res, next) => {
    Author.deleteOne({_id: req.params.id}).then(result => {
        console.log(result);
        res.status(200).json({ message: 'Author Deleted!'});
    });
});

module.exports = app;