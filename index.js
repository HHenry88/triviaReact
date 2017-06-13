const express = require('express');
const parser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();
app.use(parser.json());

app.get('*', express.static(__dirname));

app.listen(5678)

console.log('server now listening on 5678');
