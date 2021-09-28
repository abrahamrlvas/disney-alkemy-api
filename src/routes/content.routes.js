const { Router } = require('express');
const { isAuthenticated } = require('../../../../Downloads/token');
const route = Router();
const ContentController = require('../controllers/content.controller');

route.get('/movies', isAuthenticated, ContentController.getMovies);
route.post('/content', isAuthenticated, ContentController.createContent);
route.put('/content/:id', isAuthenticated, ContentController.updateContentById);
route.delete('/content/:id', isAuthenticated, ContentController.deleteContentById);

module.exports = route;