const fs = require('fs');
const path = require('path');

const Functions = require('../utils/functions');

const Prestacao = require('../models/prestacao');

const pathUpload = path.resolve('src/uploads/prestacao');

module.exports = {

    async create(req, res) {
        try {
            console.log(req.body);
            await Prestacao.create(req.body);
            res.json({
                msg: "Prestação Criada com Sucesso"
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar Prestação"
            });
        }
        
    },

    async update(req, res) {
        try {
            let news = await Prestacao.findByIdAndUpdate(req.params.id, req.body);
            res.json({
                msg: "Prestação Atualizada com Sucesso"
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao atualizar Prestação"
            });
        }
    },

    async get(req, res) {
        // let remove = await Prestacao.findById('604a4402a895b6563c6205f3');
        // await Prestacao.remove();
        try {
            let news = [];
            if( req.query.limit ){
                req.query.limit = Number.parseInt(req.query.limit);
                req.query.offset = !req.query.offset ? 0 : Number.parseInt(req.query.offset);
                news = await Prestacao.find({}).sort({'createdAt': -1}).limit(req.query.limit).skip(req.query.offset);
                let count = await Prestacao.count();
                res.setHeader('X-Total-Count', count);
                return res.json(news);
            }
            news = await Prestacao.find({}).sort({'createdAt': -1});
            return res.json(news);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Noticias"
            });
        }
    },
 
    async getById(req, res) {
        try {
            let news = await Prestacao.findById(req.params.id);
            res.json(news);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Prestação"
            });
        }
    },

    async removeById(req, res) {
        try {
            let news = await Prestacao.findById(req.params.id);
            if (fs.existsSync(`${pathUpload}/${news.path}`)) {
                fs.readdirSync(`${pathUpload}/${news.path}`).forEach(file => {
                    console.log(file);
                    fs.unlinkSync(`${pathUpload}/${news.path}/${file}`);
                });
                fs.rmdirSync(`${pathUpload}/${news.path}`, { recursive: true });
            }
            await Prestacao.remove(news);
            res.json({
                msg: "Prestação Removida com Sucesso"
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg: "Erro ao Remover Imagem"
            });
        }
    },

    async removeImageById( req, res ){
        try {
            let news = await Prestacao.findById(req.params.id);
            let paths = [
                `${req.params.image}`
            ];
            for (let index = 0; index < paths.length; index++) {
                const element = paths[index];
                if (fs.existsSync(`${pathUpload}/${news.path}/${element}`)) {
                    fs.unlinkSync(`${pathUpload}/${news.path}/${element}`);
                }
            }
            news.file = undefined;
            news.fileExt = undefined;
            await Prestacao.findByIdAndUpdate(req.params.id, news);
            res.json({
                msg: "Prestação Removida com Sucesso"
            });
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao Remover Imagem"
            });
        }
    }
};