const express = require("express");

const router = express.Router();

// GET all articles
router.get("/", (req, res) => {
  res.json({ mssg: "GET all articles" });
});

// GET a single article
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single articles" });
});

// POST a new article
router.post("/", (req, res) => {
  res.json({ mssg: "POST a new article" });
});

// DELETE an article
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE an article" });
});

// UPDATE an article
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE an article" });
});

module.exports = router;
