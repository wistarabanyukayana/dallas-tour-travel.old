const db = require("./models");
const express = require("express");
const articlesRoutes = require("./routes/articles");

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/articles", articlesRoutes);

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("Dallas Server is running on port 3000");
  });
});
