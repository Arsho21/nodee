const express = require('express');
const productRouter = express.Router();
const {create, getOne, getAll} = require('../controllers/film');

productRouter.post('/create', create)


productRouter.get('/:id', getOne);


productRouter.get('/', getAll);

 
module.exports = productRouter;
