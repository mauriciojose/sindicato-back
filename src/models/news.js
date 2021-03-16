const mongoose = require('../database/database');

const NewsSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String
    },
    path: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    },
    file: 
    {
        type: String
    },
    fileExt:
    {
        type: String
    }
});

const News = mongoose.model('News', NewsSchema);

module.exports = News;