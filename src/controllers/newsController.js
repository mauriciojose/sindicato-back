const Functions = require('../utils/functions');

const News = require('../models/news');

module.exports = {

    async create(req, res) {
        try {
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
        
    },

    async get(req, res) {
        // let remove = await News.findById('604a4402a895b6563c6205f3');
        // await News.remove(remove);
        try {
            let news = [];
            if( req.query.limit ){
                req.query.limit = Number.parseInt(req.query.limit);
                news = await News.find({}).sort({'createdAt': -1}).limit(req.query.limit);
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

    }
};