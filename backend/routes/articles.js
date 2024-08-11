const express = require("express");
const {
  GetArticles,
  GetArticle,
  CreateArticle,
  DeleteArticle,
  UpdateArticle,
} = require("../controllers/articleController");

const router = express.Router();

// GET all articles
router.get("/", GetArticles);

// GET a single article
router.get("/:id", GetArticle);

// POST a new article
router.post("/", CreateArticle);

// DELETE an article
router.delete("/:id", DeleteArticle);

// UPDATE an article
router.patch("/:id", UpdateArticle);

module.exports = router;
