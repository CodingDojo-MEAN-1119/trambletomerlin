const mongoose = require('mongoose');

const {Schema} = mongoose;

const ToySchema = new Schema({
    name: {
        type: String,
        required: [true,'You did not add name'],
        trim: true,
        minlength: [4,'Not enough characters in Name']
    },
    description: {
        type: String,
        required: [true, 'Need a Toy Description'],
        trim: true,
    },
    pet: {
        type: Schema.Types.ObjectId,
        required: [true, 'Need a Toy Description'],
        ref: 'Pet'
    },
},{
    timestamps: true
});

module.exports = mongoose.model('Toy',ToySchema);
