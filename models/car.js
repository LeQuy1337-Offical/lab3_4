const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CarSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    brand:{ 
        type: String,
        required: true
    },
    price:{ 
        type: Number,
        required: true
    }
},{
    timestamps: true
});

module.exports = mongoose.model('cars', CarSchema);
