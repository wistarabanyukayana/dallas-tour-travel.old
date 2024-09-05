const express = require("express");
const {
  GetArticles,
  GetArticle,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
} = require("../controllers/articleController");

const { validate } = require("../utils/handlers/validationHandler"); // Import the validation handler
const {
  articleValidator,
  articlesOptionValidator,
  articlesIdValidator,
} = require("./validators/articlesValidation"); // Assuming you have a validation schema

const router = express.Router();

// GET all articles
router.get("/", articlesOptionValidator, validate, GetArticles);

// GET a single article by ID
router.get("/:id", articlesIdValidator, validate, GetArticle);

// POST a new article
router.post("/", articleValidator, validate, CreateArticle);

// UPDATE an article by ID
router.patch(
  "/:id",
  articlesIdValidator,
  articleValidator,
  validate,
  UpdateArticle
);

// DELETE an article by ID
router.delete("/:id", articlesIdValidator, validate, DeleteArticle);

module.exports = router;
