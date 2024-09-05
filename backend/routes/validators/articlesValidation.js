const { body, param, query } = require("express-validator");

// Validation for article creation and updates
const articleValidator = [
  // Validate title
  body("title")
    .notEmpty()
    .withMessage("Title must not be empty")
    .isString()
    .withMessage("Title must be a string")
    .trim()
    .escape(),

  // Validate content
  body("content")
    .notEmpty()
    .withMessage("Content must not be empty")
    .isString()
    .withMessage("Content must be a string")
    .isLength({ max: 7000 })
    .withMessage("Content must not exceed 7000 characters")
    .trim()
    .escape(),

  // Validate author
  body("author")
    .notEmpty()
    .withMessage("Author must not be empty")
    .isString()
    .withMessage("Author must be a string")
    .trim()
    .escape(),

  // Validate lastEditor (if provided)
  body("lastEditor")
    .optional()
    .isString()
    .withMessage("LastEditor must be a string")
    .trim()
    .escape(),

  // Validate and sanitize image (if provided)
  body("image")
    .optional()
    .isString()
    .withMessage("Image must be a string")
    .trim()
    .escape(),

  body("imageURL")
    .optional()
    .isURL()
    .withMessage("Image URL must be a valid URL")
    .trim()
    .escape(),
];

// Validation for GET all articles
const articlesOptionValidator = [
  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("Limit must be a positive integer")
    .toInt(), // Convert to integer
];

// Validation for GET a single article by ID
const articlesIdValidator = [
  param("id").isUUID("all").withMessage("ID must be a valid UUID"),
];

module.exports = {
  articleValidator,
  articlesOptionValidator,
  articlesIdValidator,
};
