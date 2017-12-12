const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

//var db_connection = require('./server/db/mongo-connection');

// API file for interacting with MongoDB
//const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Client app  output folder
app.use(express.static(path.join(__dirname, 'build')));

// API location
//app.use('/api', api);

// Send all other requests to the Client app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

//connect to mongo
//db_connection.connect();

server.listen(port, () => console.log(`Running on localhost:${port}`));