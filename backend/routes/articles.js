const express = require("express");
const {
  GetArticles,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
} = require("../controllers/articleController");

const router = express.Router();

// GET all articles, a single article or a certain amount of article
router.get("/:id/:limit?", GetArticles);

// POST a new article
router.post("/", CreateArticle);

// DELETE an article
router.delete("/:id", DeleteArticle);

// UPDATE an article
router.patch("/:id", UpdateArticle);

module.exports = router;
