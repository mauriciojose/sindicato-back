class PrestacaoRouter {
    constructor(routes) {
        this.controller = require('../../controllers/PrestacaoController');
        this.auth = require('../../helpers/Auth');
        this.path = '/api/prestacao';
        this.routes = routes;

        const PrestacaoConfiguretion = require('../../config/prestacao/prestacao');
        this.galleryConfiguretion = new PrestacaoConfiguretion();

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`,this.auth.verifyJWTNotPermission, this.controller.get );
        this.routes.get( `${this.path}/:id`,this.auth.verifyJWT, this.controller.getById );
        this.routes.post( `${this.path}`,this.auth.verifyJWT, this.galleryConfiguretion.uploadConfig, this.controller.create );
        this.routes.put( `${this.path}/:id`,this.auth.verifyJWT, this.galleryConfiguretion.uploadConfig, this.controller.update );
        this.routes.delete( `${this.path}/:id`,this.auth.verifyJWT, this.controller.removeById );
        this.routes.delete( `${this.path}/image/:id/:image/:imagext`,this.auth.verifyJWT, this.controller.removeImageById );

    }
}

module.exports = PrestacaoRouter;