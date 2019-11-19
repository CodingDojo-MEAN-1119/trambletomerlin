const Product = require('mongoose').model('Product');
const { Http } = require('@status/codes');

module.exports = {
    index(req, res ){
        Product.find({})
            .then(products => {
                console.log('new products');
                res.json(products);
            })
            .catch(error => {
                console.log('new product error', error)
                res.status(Http.InternalServerError).json(error)
            }
            );
    },
    create(req, res ){
        console.log(req.body);
        Product.create(req.body)
            .then(product =>{
                console.log('producted created', product)
                res.json(product);
            })
            .catch(error => {
                console.log('created product error', error)
                const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message)
                res.status(422).json(errors)
                // 422 is error 
            });
    },
    show(req, res ){
        const productId = req.params.productId
        Product.findById(productId)
        .then(product => {
            console.log('viewing product', product)
            res.json(product);
        })
        .catch(error => {
            console.log('error showing product', error)
            res.status(500).json(error)
        });
    },
    update(req, res ){
        const productId = req.params.productId
        Product.findByIdAndUpdate(productId,req.body,{ new: true, runValidators: true})
        .then(product =>{
            console.log('producted updated', product)
            res.json(product);
        })
        .catch(error => {
            console.log('update of product error', error)
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            res.status(422).json(errors)
            // 422 is error 
        });
    },
    destroy(req, res ){
        const productId = req.params.productId
        Product.findByIdAndRemove(productId)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            console.log('error showing product', error)
            res.status(500).json(error)
        });
    },
}

