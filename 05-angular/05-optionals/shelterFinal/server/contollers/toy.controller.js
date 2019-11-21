const Toy = require('mongoose').model('Toy');
const Pet = require('mongoose').model('Pet');
const { Http } = require('@status/codes');

module.exports = {
    index(req, res ){
        Toy.find({})
            .then(toys => {
                console.log('new toys');
                res.json(toys);
            })
            .catch(error => {
                console.log('new toy error', error)
                res.status(Http.InternalServerError).json(error)
            }
            );
    },
    create(req, res) {
        console.log('creating new toy', req.body);
        Toy.create(req.body)
        .then(toy =>{
            console.log(toy);
            return Pet.findByIdAndUpdate(toy.pet,{ $push: {toys: toy._id}},{new:true})
            console.log('success')
        })
        .then(pet => {
            console.log(pet)
            Pet.findById(pet.id)
            .populate('toys')
            .then ( pet => {
                res.json(pet);
            });
        
        })
        .catch(error =>{
            console.log(error);
            res.status(500).json(error)
        });
      }, 
    show(req, res ){
        const toyId = req.params.toyId
        Toy.findById(toyId)
        .then(toy => {
            console.log('viewing toy', toy);
            res.json(toy);
        })
        .catch(error => {
            console.log('error showing toy', error)
            res.status(500).json(error)
        });
    },
    update(req, res ){
        const toyId = req.params.toyId
        Toy.findByIdAndUpdate(toyId,req.body,{ new: true, runValidators: true})
        .then(toy =>{
            console.log('toy updated', toy)
            res.json(toy);
        })
        .catch(error => {
            console.log('update of toy error', error)
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            res.status(422).json(errors)
            // 422 is error 
        });
    },

    destroy(req, res ){
        const toyId = req.params.toyId
        Toy.findByIdAndRemove(toyId)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            console.log('error showing toy', error)
            res.status(500).json(error)
        });
    },
}

