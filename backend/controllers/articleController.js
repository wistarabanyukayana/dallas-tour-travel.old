const { Articles } = require("../models");

// get all articles
const getArticles = async (req, res) => {
  const articles = await Articles.findAll({ order: [["createdAt", "DESC"]] });

  res.status(200).json(articles);
};

// get a single article
const getArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id);

  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json(article);
};

// create a new article
const createArticle = async (req, res) => {
  const { title, content, author } = req.body;

  // add doc to db
  try {
    const article = await Articles.create({
      title,
      content,
      author,
    });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an article
const deleteArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.destroy({
    where: {
      id,
    },
    force: true,
  });

  if (!article) {
    return res.status(404).json({ error: "No such article" });
  }

  res.status(200).json({ success: "Article successfully deleted" });
};

// update an article
const updateArticle = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Articles.update({ ...req.body }, { where: { id } });

    if (!article || article == 0) {
      return res.status(404).json({ error: "No such article" });
    }

    res.status(200).json({ success: "Article successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getArticles,
  getArticle,
  createArticle,
  deleteArticle,
  updateArticle,
};
