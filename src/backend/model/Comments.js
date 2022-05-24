const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    commentmsg: {
        type: String,
        required: true
    },
    
    
});

module.exports = mongoose.model('Comment', commentSchema);