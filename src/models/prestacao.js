const mongoose = require('../database/database');

const PrestacaoSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    mes: {
        type: Number
    },
    path: {
        type: String
    },
    file: {
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

const Prestacao = mongoose.model('Prestacao', PrestacaoSchema);

module.exports = Prestacao;