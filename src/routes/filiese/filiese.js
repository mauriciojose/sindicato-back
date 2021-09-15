class FilieseRouter {
    constructor(routes) {
        this.controller = require('../../controllers/FilieseController');
        this.path = '/api/filiese';
        this.path2 = '/api/filiado';
        this.routes = routes;

        this.auth = require('../../helpers/Auth');

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`,this.auth.verifyJWT, this.controller.get );
        this.routes.get( `${this.path}/:id`,this.auth.verifyJWT, this.controller.getById );
        this.routes.post( `${this.path}`, this.controller.create );
        this.routes.post( `${this.path}/associado`, this.controller.createAssociado );
        this.routes.put( `${this.path}/:id`,this.auth.verifyJWT, this.controller.update );
        this.routes.put( `${this.path}/valid/:id`,this.auth.verifyJWT, this.controller.updateValid );
        this.routes.delete( `${this.path}/:id`,this.auth.verifyJWT, this.controller.removeById );
        this.routes.get( `${this.path2}`,this.auth.verifyJWT, this.controller.getAssociado );
        this.routes.post( `${this.path2}`, this.controller.createAssociado );

    }
}

module.exports = FilieseRouter;