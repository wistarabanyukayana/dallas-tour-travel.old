const { Articles } = require("../models");

const { ProcessImage, DeleteImage } = require("../utils/image");

// get all articles
const GetArticles = async (req, res) => {
  const articles = await Articles.findAll({ order: [["createdAt", "DESC"]] });

  res.status(200).json(articles);
};

// get a single article
const GetArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id);

  if (!article) return res.status(404).json({ error: "No such article" });

  res.status(200).json(article);
};

// create a new article
const CreateArticle = async (req, res) => {
  //const { title, content, author } = req.body;

  const image = await ProcessImage(req);

  if (image != null && image.error)
    return res.status(image.status).json(image.error);

  // add doc to db
  try {
    const article = await Articles.create({
      image: image ? image[0] : null,
      imageURL: image ? image[1] : null,
      ...req.body,
    });
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete an article
const DeleteArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id);

  if (!article) return res.status(404).json({ error: "No such article" });

  const imageOwnerCount = await Articles.count({
    where: { image: article.image },
  });

  try {
    if (imageOwnerCount == 1) {
      DeleteImage(article.image);
    }

    await Articles.destroy({
      where: {
        id,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }

  res.status(200).json({ success: "Article successfully deleted" });
};

// update an article
const UpdateArticle = async (req, res) => {
  const { id } = req.params;

  const article = await Articles.findByPk(id);

  if (!article || article == 0)
    return res.status(404).json({ error: "No such article" });

  const image = await ProcessImage(req, article);

  if (image != null && image.error)
    return res.status(image.status).json(image.error);

  const imageOwnerCount = await Articles.count({
    where: { image: article.image },
  });

  try {
    if (imageOwnerCount == 1 && image[0] != article.image) {
      DeleteImage(article.image);
    }

    await Articles.update(
      {
        image: image[0],
        imageURL: image[1],
        ...req.body,
      },
      { where: { id } }
    );

    res.status(200).json({ success: "Article successfully updated" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  GetArticles,
  GetArticle,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
};
