class NewsConfiguration {
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
                req.body.path = (typeof req.body.path !== 'undefined' ) ? req.body.path : require('../../utils/functions').getUniqueHash();
                const path = req.body.path;
                const dir = `./src/uploads/news/${path}`
                fs.access(dir, error => {
                if (error) {
                    return fs.mkdir(dir, error => cb(null, dir))
                }
                return cb(null, dir)
                })
            },
            filename: function (req, file, callback) {
              callback(null, (req.body.file) ? req.body.file :  require('../../utils/functions').getUniqueHash());
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

    async resizeImages (req, res, next) {

        const sharp = require("sharp");
        const path = require('path');

        if (!req.files) return next();
        req.body.files = '';
        req.body.filesExt = '';
        await Promise.all(
          req.files.map(async file => {
            
            let output = file.filename;
            
            await sharp(file.path)
              .resize(200, 300, {
                kernel: sharp.kernel.nearest,
                fit: 'contain'
              })
              .toFormat('webp')
              .webp({
                quality: 90
              })
            .toFile(`./src/uploads/news/${req.body.path}/${output}200x300.webp`);

            await sharp(file.path)
            .resize(200, 300, {
              kernel: sharp.kernel.nearest,
              fit: 'contain'
            })
            .toFormat('webp')
              .webp({
                quality: 80
              })
          .toFile(`./src/uploads/news/${req.body.path}/${output}100x100.webp`);
      
            req.body.file = file.filename;
            req.body.fileExt = file.filename+path.extname(file.originalname);
          })
        );
      
        next();
      };
}

module.exports = NewsConfiguration;