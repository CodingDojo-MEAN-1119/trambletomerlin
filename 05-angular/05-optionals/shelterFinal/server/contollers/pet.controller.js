const Pet = require('mongoose').model('Pet');
const { Http } = require('@status/codes');

module.exports = {
    index(req, res ){
        Pet.find({})
            .then(pets => {
                console.log('new pets');
                res.json(pets);
            })
            .catch(error => {
                console.log('new pet error', error)
                res.status(Http.InternalServerError).json(error)
            }
            );
    },
    create(request, response) {
        const thisPet = new Pet();
        thisPet.name = request.body.name;
        thisPet.type = request.body.type;
        thisPet.description = request.body.description;
        thisPet.skill1 = request.body.skill1;
        thisPet.skill2 = request.body.skill2;
        thisPet.skill3 = request.body.skill3;
        thisPet.save()
          .then(pet => response.json(pet))
          .catch(errorHandler.bind(response));
      }, 
    show(req, res ){
        const petId = req.params.petId
        Pet.findById(petId)
        .then(pet => {
            console.log('viewing pet', pet)
            res.json(pet);
        })
        .catch(error => {
            console.log('error showing pet', error)
            res.status(500).json(error)
        });
    },
    update(req, res ){
        const petId = req.params.petId
        Pet.findByIdAndUpdate(petId,req.body,{ new: true, runValidators: true})
        .then(pet =>{
            console.log('pet updated', pet)
            res.json(pet);
        })
        .catch(error => {
            console.log('update of pet error', error)
            const errors = Object.keys(error.errors)
                .map(key => error.errors[key].message)
            res.status(422).json(errors)
            // 422 is error 
        });
    },

    destroy(req, res ){
        const petId = req.params.petId
        Pet.findByIdAndRemove(petId)
        .then(result => {
            res.json(result)
        })
        .catch(error => {
            console.log('error showing pet', error)
            res.status(500).json(error)
        });
    },
}

