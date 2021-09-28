const Content = require("../models/content.model");

module.exports = {
  async getMovies(req, res) {
    const movies = await Content.findAll({});
    const data = movies.map(x => {
      return {
        title: x.title,
        image: x.image,
        createdAt: x.createdAt
      }
    });
    return res.status(200).json(data);
  },

  async createContent(req, res) {
    const { title, image, qualification } = req.body;
    const content = await Content.create({ title, image, createdAt: new Date(), qualification });
    if (!content) {
      return res.status(404).json({ message: "Movie or serie not found" });
    }
    return res.status(201).json({ message: "Content created successfully" });
  },

  async updateContentById(req, res) {
    const { id } = req.params;
    const { title, image, qualification } = req.body;
    const content = await Content.update(
      { title, image, qualification },
      { where: { id } });
    if (!content) {
      return res.status(404).json({ message: "Movie or serie not found" });
    }
    return res.status(200).json({ message: "Content updated successfully" });
  },

  async deleteContentById(req, res) {
    const content = await Content.destroy({ where: { id } });
    if (!content) {
      return res.status(404).json({ message: "Movie or serie not found" });
    }
    return res.status(200).json({ message: "Content deleted successfully" });
  },
}