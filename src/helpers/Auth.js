const jwt = require('jsonwebtoken');
require('dotenv/config');

module.exports = {
    async verifyJWT(req, res, next){
        const token = req.headers['authorization'].split(' ')[1];
        // console.log(token);
        if (!token) return res.status(403).json({ auth: false, message: 'No token provided.' });
        
        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });
            
            // se tudo estiver ok, salva no request para uso posterior
            req.userId = decoded.id;
            next();
        });
    }
}