class NewsRouter {
    constructor(routes) {
        this.controller = require('../../controllers/newsController');
        this.auth = require('../../helpers/Auth');
        this.path = '/api/news';
        this.routes = routes;

        const NewsConfiguretion = require('../../config/news/news');
        this.galleryConfiguretion = new NewsConfiguretion();

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`, this.controller.get );
        this.routes.get( `${this.path}/:id`, this.controller.getById );
        this.routes.post( `${this.path}`,this.auth.verifyJWT, this.galleryConfiguretion.uploadConfig,this.galleryConfiguretion.resizeImages, this.controller.create );
        this.routes.put( `${this.path}/:id`,this.auth.verifyJWT, this.galleryConfiguretion.uploadConfig,this.galleryConfiguretion.resizeImages, this.controller.update );
        this.routes.delete( `${this.path}/:id`,this.auth.verifyJWT, this.controller.removeById );
        this.routes.delete( `${this.path}/image/:id/:image/:imagext`,this.auth.verifyJWT, this.controller.removeImageById );

    }
}

module.exports = NewsRouter;