const Sequelize = require('sequelize');
const db = require('../database/database');
const Content = require('./content.model');

const Person = db.define("person", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  weight: {
    type: Sequelize.STRING,
  },
  history: {
    type: Sequelize.STRING
  }
});

Content.Person = Content.belongsTo(Person);

module.exports = Person;
