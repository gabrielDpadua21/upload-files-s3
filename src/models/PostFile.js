const mongoose = require('mongoose');

const PostFileSchema = new mongoose.Schema({
    name : String,
    size : Number,
    key  : String,
    url  : String,
}, {timestamps: true, versionKey: false})

module.exports = mongoose.model('PostFile', PostFileSchema);