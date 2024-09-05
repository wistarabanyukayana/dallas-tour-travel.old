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

// UPDATE an article
router.patch("/:id", UpdateArticle);

// DELETE an article
router.delete("/:id", DeleteArticle);

module.exports = router;
