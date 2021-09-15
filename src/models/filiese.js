const mongoose = require('../database/database');

const { v4: uuidv4 } = require('uuid');

const FilieseSchema = new mongoose.Schema({
    _id: { 
        type: String
    },
    nome: {
        type: String,
        require: true,
    },
    cargo: {
        type: String,
        // require: true,
    },
    local: {
        type: String,
        // require: true,
    },
    secretaria: {
        type: String,
        // require: true,
    },
    matricula: {
        type: String,
        require: true,
    },
    data_admissao: {
        type: String,
        // require: true,
    },
    rg: {
        type: String,
        // require: true,
    },
    orgao_emissor: {
        type: String,
        // require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    estado_civil: {
        type: String,
        // require: true,
    },
    naturalidade: {
        type: String,
        // require: true,
    },
    data_nascimento: {
        type: String,
        // require: true,
    },
    bairro: {
        type: String,
        // require: true,
    },
    cidade: {
        type: String,
        // require: true,
    },
    estado: {
        type: String,
        // require: true,
    },
    logradouro: {
        type: String,
        // require: true,
    },
    numero: {
        type: String,
        // require: true,
    },
    cep: {
        type: String,
        // require: true,
    },
    telefone: {
        type: String,
        // require: true,
    },
    email: {
        type: String,
        // require: true,
    },
    observacao: {
        type: String,
        // require: true,
    },
    password: {
        type: String,
        select: false
    },
    is_valid: {
        type: Boolean,
        default: false
    },
    is_filiado: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
});

FilieseSchema.pre('save', async function (next) {
    
    this._id = uuidv4();
    
    next();
});

const Filiese = mongoose.model('Filiese', FilieseSchema);

module.exports = Filiese;