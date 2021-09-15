class UsersRouter {
    constructor(routes) {
    this.controller = require('../../controllers/AuthController');
    this.EmailController = require('../../controllers/EmailController');
    this.path = '/api/auth';
    this.routes = routes;
    this.auth = require('../../helpers/Auth');

    this.init();
}
async init(){
    this.routes.post(this.path + '/authenticate', this.controller.authenticate);
    this.routes.post(this.path + '/register', this.controller.register);
    this.routes.post('/email/send',this.EmailController.sendEmailRequest);
    
    this.routes.post(this.path + '/authenticate/filiado', this.controller.authenticateFiliado);
    // this.routes.get(this.path + '/test',this.auth.verifyJWT, this.controller.test);
}
}
module.exports = UsersRouter;
