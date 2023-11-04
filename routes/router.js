const express = require('express');
const myController = require('../controllers/controller');

const myRouter = express.Router();
myRouter.get('/', myController.getModels);
myRouter.get('/:id', myController.getModel);
myRouter.get('/field/:field', myController.getModelsByField);
myRouter.post('/', myController.postModel);
myRouter.put('/:id', myController.putModel);
myRouter.delete('/:id', myController.deleteModel);

module.exports = myRouter;