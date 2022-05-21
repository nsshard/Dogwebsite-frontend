const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dogSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: Buffer,
        required: true
        
    }
});

module.exports = mongoose.model('Dog', dogSchema);