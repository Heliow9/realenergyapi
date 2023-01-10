const express = require('express');
const routes = express.Router()

const Controller = require('./controller/InstaController.js')

const InstaControlller = new Controller;

routes.get('/', (InstaControlller.index));












module.exports = routes;