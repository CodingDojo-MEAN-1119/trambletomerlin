module.exports= {

    quotes_page; function(req,res){
        
    }
    Quote.find({}, function(err, quotes) {
        if (err) { console.log(err); }
        res.render('quotes', { quotes: quotes });
      });


};

