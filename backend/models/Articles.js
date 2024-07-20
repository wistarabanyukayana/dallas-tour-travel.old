module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define("Articles", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastEditor: {
      type: DataTypes.STRING,
    },
  });

  return Articles;
};
