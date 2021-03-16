const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/syndicate', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;