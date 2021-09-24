//Este modelo es para las peliculas o series
const Sequelize = require('sequelize');
const db = require('../database/database');
const Gender = require('./gender.model');

const Content = db.define("content", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  createdAt: {
    field: "created_at",
    type: Sequelize.DATE,
  },
  qualification: {
    type: Sequelize.INTEGER,
  },
});

Gender.Content = Gender.belongsTo(Content);

module.exports = Content;
