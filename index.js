const express = require('express');
const parser = require('body-parser');
const request = require('request');
const path = require('path');

const app = express();
app.use(parser.json());

// app.use(express.static(path.resolve(__dirname, './public')));

// const triviaUrl = 'https://opentdb.com/api.php?amount=1';

// app.use('/scripts', express.static(path.resolve(__dirname, './node_modules')))
app.get('*', express.static(__dirname));

// const getTrivia = (triviaUrl) => {
//   request(triviaUrl, (err,data, body) => {
//     if(err){
//       console.warn('rrrrr',err);
//     }else {
//       res.send(body);
//     }
//   })
// }

app.listen(5678)

console.log('server now listening on 5678');

// module.exports = getTrivia;
