"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Articles extends Model {
    static associate(models) {}
  }

  Articles.init(
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
        defaultValue: "defaultArticlesImg.png",
      },
      imageURL: {
        type: DataTypes.STRING,
        defaultValue: "http://localhost:4000/images/defaultArticlesImg.png",
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Article must have a title" },
          notEmpty: { msg: "Title must not be empty" },
        },
      },
      content: {
        type: DataTypes.STRING(7000),
        allowNull: false,
        validate: {
          notNull: { msg: "Article must have a content" },
          notEmpty: { msg: "Content must not be empty" },
        },
      },
      author: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: "Article must have an author" },
          notEmpty: { msg: "Author must not be empty" },
        },
      },
      lastEditor: {
        type: DataTypes.STRING,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "Articles", // We need to choose the model name
    }
  );
  return Articles;
};
