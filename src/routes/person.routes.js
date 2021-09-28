const { Router } = require('express');
const route = Router();
const PersonController = require('../controllers/person.controller');
const { isAuthenticated } = require('../middlewares/authToken');

route.get('/characters', isAuthenticated ,PersonController.getPerson);
route.get('/persons', PersonController.getPersons);
route.post('/persons', PersonController.createPerson);
route.put('/persons/:id', PersonController.updatePersonById);
route.delete('/persons/:id', PersonController.deletePersonById);


module.exports = route;