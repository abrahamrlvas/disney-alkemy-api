const { Router } = require('express');
const route = Router();
const PersonController = require('../controllers/person.controller');
const { isAuthenticated } = require('../middlewares/authToken');

route.get('/characters', isAuthenticated, PersonController.getPerson);
route.get('/persons', isAuthenticated, PersonController.getPersons);
route.post('/persons', isAuthenticated, PersonController.createPerson);
route.put('/persons/:id', isAuthenticated, PersonController.updatePersonById);
route.delete('/persons/:id', isAuthenticated, PersonController.deletePersonById);


module.exports = route;