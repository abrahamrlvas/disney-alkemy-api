const { Router } = require('express');
const route = Router();
const ContentController = require('../controllers/content.controller');

route.get('/movies', ContentController.getMovies);
route.post('/content', ContentController.createContent);
route.put('/content/:id', ContentController.updateContentById);
route.delete('/content/:id', ContentController.deleteContentById);

module.exports = route;