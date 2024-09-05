const { Articles } = require("../models");
const imageHandler = require("../utils/handlers/imageHandler");

// GET all articles, a single article or a certain amount of article
const GetArticles = async (req, res) => {
  try {
    const { limit, id } = req.params;
    const queryOptions = {
      order: [["createdAt", "DESC"]],
      ...(limit && { limit: parseInt(limit) }),
    };

    const article =
      id === "all"
        ? await Articles.findAll(queryOptions)
        : await Articles.findByPk(id);

    if (!article) return res.status(404).json({ error: "No such article" });

    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

// Create a new article
const CreateArticle = async (req, res) => {
  try {
    const image = await imageHandler(req, "process");

    const article = await Articles.create({
      image: image ? image[0] : null,
      imageURL: image ? image[1] : null,
      ...req.body,
    });

    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

// Delete an article
const DeleteArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findByPk(id);

    if (!article) return res.status(404).json({ error: "No such article" });

    const imageOwnerCount = await Articles.count({
      where: { image: article.image },
    });

    if (imageOwnerCount == 1) {
      imageHandler(req, "delete", article.image);
    }

    await Articles.destroy({ where: { id } });

    res.status(200).json({ success: "Article successfully deleted" });
  } catch (error) {
    next(error);
  }
};

// Update an article
const UpdateArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await Articles.findByPk(id);

    if (!article) return res.status(404).json({ error: "No such article" });

    const image = await imageHandler(req, "process", article);

    const imageOwnerCount = await Articles.count({
      where: { image: article.image },
    });

    if (article.image && imageOwnerCount === 1 && image[0] !== article.image) {
      await imageHandler(req, "delete", article.image);
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
    next(error);
  }
};

module.exports = {
  GetArticles,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
};
