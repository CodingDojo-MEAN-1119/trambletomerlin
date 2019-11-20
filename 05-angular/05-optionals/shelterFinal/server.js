const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();
require('./server/config/database')

app.use(express.static(path.join(__dirname,'dist/productmanager')));
app.use(bodyparser.json());
app.use(require('./server/routes'))
app.listen(8000, () => console.log('connected to express'));

