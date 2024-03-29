const express = require('express');
const routes = express.Router();
const fs = require('fs');
const path = require('path');

const GalleryRouter = require('./gallery/gallery');
const galleryRouter = new GalleryRouter(routes);

const NewsRouter = require('./news/news');
const newsRouter = new NewsRouter(routes);

const FilieseRouter = require('./filiese/filiese');
const filieseRouter = new FilieseRouter(routes);

const UsersRouter = require('./users/users');
const usersRouter = new UsersRouter(routes);

const PrestacaoRouter = require('./prestacao/prestacao');
const prestacaoRouter = new PrestacaoRouter(routes);


routes.get('/api',function(req, res) {
    let html = path.join(__dirname,'/../../build/index.html');
    res.sendFile(html);
});


module.exports = routes;