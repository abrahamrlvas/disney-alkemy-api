const { Op } = require('sequelize');
const Person = require('../models/person.model');
module.exports = {
  async getPerson(req, res) {
    const { name, age, movies } = req.query;
    const person = await Person.findAll({});
    const data = person.map(x => {
      return {
        name: x.name,
        image: x.image
      }
    });
    if (name || age || movies) {
      const person = await Person.findAll({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.eq]: name
              },
            },
            {
              age: {
                [Op.eq]: age
              }
            },
            {
              contentId: {
                [Op.eq]: movies
              }
            }
          ]
        }
      });
      return res.json(person);
    }
    return res.json(data)
  },

  async getPersons(req, res) {
    const persons = await Person.findAll({ include: 'content' });
    if (!persons) {
      return res.status(404).json({ message: "Persons not found" });
    }
    return res.status(200).json(persons);
  },

  async createPerson(req, res) {
    const { name, image, age, weight, history, contentId } = req.body;
    const person = await Person.create({ name, image, age, weight, history, contentId });
    if (!person) {
      return res.status(404).json({ message: "Persons not found" });
    }
    return res.status(201).json({ message: "Person created successfully" });
  },

  async updatePersonById(req, res) {
    const { id } = req.params;
    const { name, image, age, weight, history, contentId } = req.body;
    const person = await Person.update(
      { name, image, age, weight, history, contentId },
      { where: { id } });
    if (!person) {
      return res.status(404).json({ message: "Persons not found" });
    }
    return res.status(200).json({ message: "Person updated successfully" });
  },

  async deletePersonById(req, res) {
    const { id } = req.params;
    const person = await Person.destroy({ where: { id } });
    if (!person) {
      return res.status(404).json({ message: "Persons not found" });
    }
    return res.status(200).json({ message: "Person deleted successfully" });
  },
}

