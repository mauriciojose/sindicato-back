class NewsRouter {
    constructor(routes) {
        this.controller = require('../../controllers/newsController');
        this.path = '/news';
        this.routes = routes;

        const NewsConfiguretion = require('../../config/news/news');
        this.galleryConfiguretion = new NewsConfiguretion();

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`, this.controller.get );
        this.routes.get( `${this.path}/:id`, this.controller.getById );
        this.routes.post( `${this.path}`, this.galleryConfiguretion.uploadConfig,this.galleryConfiguretion.resizeImages, this.controller.create );
        this.routes.put( `${this.path}/:id`, this.controller.update );
        this.routes.delete( `${this.path}/:id`, this.controller.removeById );

    }
}

module.exports = NewsRouter;