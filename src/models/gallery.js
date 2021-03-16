const mongoose = require('../database/database');

const GallerySchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
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
    files: [
        {
            type: String
        }
    ],
    filesExt: [
        {
            type: String
        }
    ]
});

const Gallery = mongoose.model('Gallery', GallerySchema);

module.exports = Gallery;