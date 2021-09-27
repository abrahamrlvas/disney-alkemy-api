const { Router } = require('express');
const route = Router();
const PersonController = require('../controllers/person.controller');

route.get('/characters', PersonController.getPerson);
route.get('/persons', PersonController.getPersons);
route.post('/persons', PersonController.createPerson);
route.put('/persons/:id', PersonController.updatePersonById);
route.delete('/persons/:id', PersonController.deletePersonById);


module.exports = route;