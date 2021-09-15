const fs = require('fs');
const path = require('path');

const Functions = require('../utils/functions');

const Filiese = require('../models/filiese');
Filiese.init();

const bcrypt = require('bcryptjs');

module.exports = {

    async create(req, res) {
        let { cpf } = req.body;
        try {
            cpf = cpf.replace( /\D/g, '');
            if (await Filiese.findOne({ cpf })) {
                return res.status(400).json({ error: 'CPF já cadastrado!' });
            }
            req.body.cpf = cpf;
            await Filiese.create(req.body);
            res.json({
                msg: "Filiese Criada com Sucesso"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Erro ao criar Filiese"
            });
        }
        
    },
    async createAssociado(req, res) {
        let { cpf } = req.body;
        try {
            cpf = cpf.replace( /\D/g, '');
            if (await Filiese.findOne({ cpf })) {
                return res.status(400).json({ error: 'CPF já cadastrado!' });
            }
            req.body.cpf = cpf;
            req.body.is_filiado = true;
            await Filiese.create(req.body);
            res.json({
                msg: "Filiese Criada com Sucesso"
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({
                msg: "Erro ao criar Filiese"
            });
        }
        
    },

    async update(req, res) {
        
    },

    async updateValid(req, res) {
        let id = req.params.id;
        try {
            let filieses = await Filiese.findById( id );
            filieses.is_valid = true;
            filieses.password = await bcrypt.hash(filieses.matricula, 10);;
            let news = await Filiese.findByIdAndUpdate(req.params.id, filieses);
            filieses.password = undefined;
            return res.json(filieses);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: "Erro ao atualizar Filie-se"
            });
        }
        res.json();
    },

    async get(req, res) {
        // let remove = await Filiese.findById('60481cc75edef433bd83de2f');
        
        //is_filiado: false
        try {
            let filieses = await Filiese.find({is_filiado: false});
            return res.json(filieses);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Filie-se"
            });
        }
        res.json();
    },

    async getAssociado(req, res) {
        // let remove = await Filiese.findById('60481cc75edef433bd83de2f');
        // await Filiese.remove(remove);
        try {
            let filieses = await Filiese.find({is_filiado: true});
            return res.json(filieses);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Filie-se"
            });
        }
        res.json();
    },
 
    async getById(req, res) {
        let id = req.params.id;
        try {
            let filieses = await Filiese.findById( id );
            return res.json(filieses);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: "Erro ao buscar Filie-se"
            });
        }
        res.json();
    },

    async removeById(req, res) {
        try {
            let news = await Filiese.findById(req.params.id);
            // console.log(req.params.id);
            await Filiese.remove(news);
            return res.json({
                msg: "Removido com Sucesso"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: "Erro ao Remover Imagem"
            });
        }
    }
};