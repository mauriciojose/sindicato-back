const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');
var fs = require('fs');

const port = process.env.PORT || 3333;

const app = express();

app.use(express.static(path.join(__dirname, 'uploads')));

let whitelist = ['http://localhost:3000','*'];
let corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
};

app.use(cors());

app.use(routes);

app.listen(port);