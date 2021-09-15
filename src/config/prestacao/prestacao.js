class PrestacaoConfiguration {
    constructor() {
        this.init();
    }

    updatePath(){}

    async init(){

        const multer  = require('multer');
        const path = require('path');
        const fs = require('fs');

        const storage = multer.diskStorage({
            destination: (req, file, cb) => {

              console.log(req.body);
                req.body.path = (typeof req.body.path !== 'undefined' ) ? req.body.path : require('../../utils/functions').getUniqueHash();
                const path = req.body.path;
                const dir = `./src/uploads/prestacao/${path}`;
                req.body.file = (req.body.file) ? req.body.file :  require('../../utils/functions').getUniqueHash()+'.pdf';
                fs.access(dir, error => {
                if (error) {
                    return fs.mkdir(dir, error => cb(null, dir))
                }
                return cb(null, dir)
                })
            },
            filename: function (req, file, callback) {
              callback(null, (req.body.file) ? req.body.file :  require('../../utils/functions').getUniqueHash()+'.pdf');
            }
        });
            
        const storageMulter = multer({ 
            storage: storage,
            fileFilter: function(req, file, cb) {
              cb(null, true);
            }
          });
          
        this.uploadConfig = storageMulter.array('photos');
    }

    
}

module.exports = PrestacaoConfiguration;