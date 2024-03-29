class GalleryRouter {
    constructor(routes) {
        this.controller = require('../../controllers/galleryController');
        this.auth = require('../../helpers/Auth');
        this.path = '/api/gallery';
        this.routes = routes;

        const GalleryConfiguretion = require('../../config/gallery/gallery');
        this.galleryConfiguretion = new GalleryConfiguretion();

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`, this.controller.get );
        this.routes.get( `${this.path}/:id`, this.controller.getById );
        this.routes.post( `${this.path}`,this.auth.verifyJWT, this.galleryConfiguretion.uploadConfig,this.galleryConfiguretion.resizeImages, this.controller.create );
        this.routes.put( `${this.path}/:id`,this.auth.verifyJWT, this.controller.update );
        this.routes.delete( `${this.path}/:id`,this.auth.verifyJWT, this.controller.removeById );

    }
}

module.exports = GalleryRouter;