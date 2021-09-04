const fs = require('fs');
const path = require('path');

const Functions = require('../utils/functions');

const News = require('../models/news');

const pathUpload = path.resolve('src/uploads/news');

module.exports = {

    async create(req, res) {
        try {
            console.log(req.body);
            await News.create(req.body);
            res.json({
                msg: "Noticia Criada com Sucesso"
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar Noticia"
            });
        }
        
    },

    async update(req, res) {
        try {
            let news = await News.findByIdAndUpdate(req.params.id, req.body);
            res.json({
                msg: "Noticia Atualizada com Sucesso"
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao atualizar Noticia"
            });
        }
    },

    async get(req, res) {
        // let remove = await News.findById('604a4402a895b6563c6205f3');
        // await News.remove();
        try {
            let news = [];
            if( req.query.limit ){
                req.query.limit = Number.parseInt(req.query.limit);
                req.query.offset = !req.query.offset ? 0 : Number.parseInt(req.query.offset);
                news = await News.find({}).sort({'createdAt': -1}).limit(req.query.limit).skip(req.query.offset);
                let count = await News.count();
                res.setHeader('X-Total-Count', count);
                return res.json(news);
            }
            news = await News.find({}).sort({'createdAt': -1});
            return res.json(news);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Noticias"
            });
        }
    },
 
    async getById(req, res) {
        try {
            let news = await News.findById(req.params.id);
            res.json(news);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Noticia"
            });
        }
    },

    async removeById(req, res) {
        try {
            let news = await News.findById(req.params.id);
            if (fs.existsSync(`${pathUpload}/${news.path}`)) {
                fs.readdirSync(`${pathUpload}/${news.path}`).forEach(file => {
                    console.log(file);
                    fs.unlinkSync(`${pathUpload}/${news.path}/${file}`);
                });
                fs.rmdirSync(`${pathUpload}/${news.path}`, { recursive: true });
            }
            await News.remove(news);
            res.json({
                msg: "Noticia Atualizada com Sucesso"
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
            let news = await News.findById(req.params.id);
            let paths = [
                `${req.params.image}`,
                `${req.params.image}100x100.webp`,
                `${req.params.image}200x300.webp`
            ];
            for (let index = 0; index < paths.length; index++) {
                const element = paths[index];
                if (fs.existsSync(`${pathUpload}/${news.path}/${element}`)) {
                    fs.unlinkSync(`${pathUpload}/${news.path}/${element}`);
                }
            }
            news.file = undefined;
            news.fileExt = undefined;
            await News.findByIdAndUpdate(req.params.id, news);
            res.json({
                msg: "Noticia Atualizada com Sucesso"
            });
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao Remover Imagem"
            });
        }
    }
};