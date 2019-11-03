const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
   res.render('index', {title: "my root route"});
});
app.post('/form',(req,res) => {
    console.log(req.body)
    render.redirect('/result');
});

app.listen(8000, () => console.log("listening on port 8000"));


