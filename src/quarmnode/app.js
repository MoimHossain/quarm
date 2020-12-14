const express = require('express')
const bodyParser = require('body-parser');
const url = require('url');
const querystring = require('querystring');
const app = express()
const port = 3000
const path = require('path');
const fetch = require('node-fetch');

app.use(express.static('assests'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/azget', async function(req, res) {  
  fetch(req.query.targetURI)
  .then(response => {

    response.text().then(jsonResponse => {
      res.setHeader('Content-Type', 'application/json');
      res.end(jsonResponse);
    });
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})