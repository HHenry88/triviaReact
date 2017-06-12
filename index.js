const express = require('express');
const parser = require('body-parser');
const request = require('request');

const app = express();
app.use(parser.json());

const triviaUrl = 'https://opentdb.com/api.php?amount=1';

app.get('/', (req, res) => {
  request(triviaUrl, (err,data, body) => {
    if(err){
      console.warn(err);
    }else {
      res.send(body);
    }
  })
})

app.listen(5678)

console.log('server now listening on :5678');
