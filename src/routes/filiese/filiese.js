class FilieseRouter {
    constructor(routes) {
        this.controller = require('../../controllers/FilieseController');
        this.path = '/api/filiese';
        this.routes = routes;

        this.auth = require('../../helpers/Auth');

        this.init();
    }

    async init(){
        
        this.routes.get( `${this.path}`,this.auth.verifyJWT, this.controller.get );
        this.routes.get( `${this.path}/:id`,this.auth.verifyJWT, this.controller.getById );
        this.routes.post( `${this.path}`, this.controller.create );
        this.routes.put( `${this.path}/:id`,this.auth.verifyJWT, this.controller.update );
        this.routes.put( `${this.path}/valid/:id`,this.auth.verifyJWT, this.controller.updateValid );
        this.routes.delete( `${this.path}/:id`,this.auth.verifyJWT, this.controller.removeById );

    }
}

module.exports = FilieseRouter;