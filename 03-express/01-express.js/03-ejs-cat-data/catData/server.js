const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(function(request,response,next){
    console.log(request.url);
    next();
});

var cats_array = [
    {name: "Cat1", age: "3", img: '/cat1.png' }, 
    {name: "Cat2", age: "10", img: '/cat2.jpeg'}, 
    {name: "Cat3", age: "5", img: '/cat3.jpeg'}, 
    
];
app.get('/', (request, response) => {
   response.send("F yeah friday!");
});

app.get("/cats", (req, res) => {
    
    res.render('cats', {cats: cats_array});
})

app.get("/cats/:cat_id", (req, res) => {
    var catid = req.params.cat_id;
    var cat = cats_array[catid];
    console.log(cat);
    console.log(catid);
    res.render('cat', {cat} );
})

app.listen(8000, () => console.log("listening on port 8000"));




