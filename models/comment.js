const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
///set Schema variable just to shorten code

const PostSchema = new Schema({
    username: String, 
    comment: String, 
});

module.exports = mongoose.model('Post', PostSchema);
