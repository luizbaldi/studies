const express = require('express');
const consign = require('consign');
const server = express();

server.set('view engine', 'ejs');
server.set('views', './node-mongo-complete-course/app/views');

consign()
    .include('./node-mongo-complete-course/app/routes')
    .then('./node-mongo-complete-course/config/dbConnection.js')
    .then('./node-mongo-complete-course/app/models')
    .into(server);

module.exports = server;