const parser = require('body-parser');
const express = require('express');
const path = require('path');

const port = process.env.PORT || 8000;
const app = express()

app
    .use(parser.urlencoded({extended : true}))
    .use(parser.json())
    .use(express.static(path.join(__dirname, 'dist', 'my-app')))
    .listen(port,() => console.log(`Express is listening on port ${port}`));