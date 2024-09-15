const { Articles } = require("../models");
const imageHandler = require("../utils/handlers/imageHandler");

//const imageURL = `${req.protocol}://${req.get("host")}/images/${fileName}`;

// GET all articles
const GetArticles = async (req, res, next) => {
  try {
    const { limit } = req.query; // Query param for limit

    const queryOptions = {
      order: [["createdAt", "DESC"]],
      ...(limit && { limit: parseInt(limit) }), // Apply limit if provided
    };

    const rawArticles = await Articles.findAll(queryOptions);

    const pcdArticles =
      rawArticles.length > 0
        ? rawArticles.map((rawArticle) => ({
            ...rawArticle.toJSON(),
            ImageURL: `${req.protocol}://${req.get("host")}/images/${
              rawArticle.ImageName
            }`,
          }))
        : rawArticles;

    res.status(200).json(pcdArticles);
  } catch (error) {
    next(error);
  }
};

// Get an article
const GetArticle = async (req, res, next) => {
  try {
    const { id } = req.params; // Path param for article ID

    const rawArticle = await Articles.findByPk(id);

    if (!rawArticle) return res.status(404).json({ error: "No such article" });

    const pcdArticle = {
      ...rawArticle.toJSON(),
      ImageURL: `${req.protocol}://${req.get("host")}/images/${
        rawArticle.ImageName
      }`,
    };

    res.status(200).json(pcdArticle);
  } catch (error) {
    next(error);
  }
};

// Create a new article
const CreateArticle = async (req, res, next) => {
  try {
    const imageName = await imageHandler(req, "process");

    const article = await Articles.create({
      ...(imageName && { ImageName: imageName }),
      ...req.body,
    });

    res.status(200).json(article);
  } catch (error) {
    next(error);
  }
};

// Delete an article
const DeleteArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Articles.findByPk(id);

    if (!article) return res.status(404).json({ error: "No such article" });

    const imageOwnerCount = await Articles.count({
      where: { ImageName: article.ImageName },
    });

    if (
      article.ImageName &&
      !article.ImageName.includes("default") &&
      imageOwnerCount === 1
    ) {
      imageHandler(req, "delete", article.ImageName);
    }

    await Articles.destroy({ where: { id } });

    res.status(200).json({ success: "Article successfully deleted" });
  } catch (error) {
    next(error);
  }
};

// Update an article
const UpdateArticle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const article = await Articles.findByPk(id);

    if (!article) return res.status(404).json({ error: "No such article" });

    const imageName = await imageHandler(req, "process", article);

    const imageOwnerCount = await Articles.count({
      where: { ImageName: article.ImageName },
    });

    if (
      article.ImageName &&
      !article.ImageName.includes("default") &&
      imageOwnerCount === 1 &&
      imageName !== article.ImageName
    ) {
      await imageHandler(req, "delete", article.ImageName);
    }

    await Articles.update(
      {
        ImageName: imageName,
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
  GetArticle,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
};
