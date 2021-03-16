const express = require('express');
const routes = express.Router();

const GalleryRouter = require('./gallery/gallery');
const galleryRouter = new GalleryRouter(routes);

const NewsRouter = require('./news/news');
const newsRouter = new NewsRouter(routes);


routes.get('/',function(req, res) {
    res.send("HELLO WORD!!!");
});


module.exports = routes;