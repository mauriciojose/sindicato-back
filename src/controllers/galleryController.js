const fs = require('fs');
const path = require('path');

const Functions = require('../utils/functions');

const Gallery = require('../models/gallery');

const pathUpload = path.resolve('src/uploads/gallery');

module.exports = {

    async create(req, res) {
        try {
            await Gallery.create(req.body);
            res.json({
                msg: "Galeria Criada com Sucesso"
            });
        } catch (error) {
            res.status(500).json({
                msg: "Erro ao criar Galeria"
            });
        }
        
    },

    async update(req, res) {
        
    },

    async get(req, res) {
        // let remove = await Gallery.findById('60481cc75edef433bd83de2f');
        // await Gallery.remove(remove);
        try {
            let gallerys = await Gallery.find({}).sort({'createdAt': -1});
            return res.json(gallerys);
        } catch (error) {
            return res.status(500).json({
                msg: "Erro ao buscar Galerias"
            });
        }
        res.json();
    },
 
    async getById(req, res) {
        let gallerys = [
            {
                _id: '000',
                name: 'Album Teste',
                path: Functions.getUniqueHash(),
                files: [
                    '0.png',
                    '1.png'
                ]
            },
            {
                _id: '001',
                name: 'Album Teste 2',
                path: Functions.getUniqueHash(),
                files: [
                    '0.png',
                    '1.png'
                ]
            }
        ];

        let id = req.params.id;
        let gallery = gallerys.find( gallery => gallery._id === id );
        res.json(gallery);
    },

    async removeById(req, res) {
        try {
            let news = await Gallery.findById(req.params.id);
            if (fs.existsSync(`${pathUpload}/${news.path}`)) {
                fs.readdirSync(`${pathUpload}/${news.path}`).forEach(file => {
                    console.log(file);
                    fs.unlinkSync(`${pathUpload}/${news.path}/${file}`);
                });
                fs.rmdirSync(`${pathUpload}/${news.path}`, { recursive: true });
            }
            await Gallery.remove(news);
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