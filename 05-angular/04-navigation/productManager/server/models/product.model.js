const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true,'You did not add Title'],
        trim: true,
        minlength: [4,'Not enough characters']
    },
    price: {
        type: Number,
        required: [true,'You did not add a price'],
        min: [1,'Price is less than 1 dollar'],
    },
    imageUrl:{
        type: String,
        trim: true
    }
    
},{
    timestamps: true
});

module.exports = mongoose.model('Product',ProductSchema);
