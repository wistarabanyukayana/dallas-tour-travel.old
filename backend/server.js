require("dotenv").config();

const cors = require("cors");
const express = require("express");
const db = require("./models");
const articlesRoutes = require("./routes/articles");

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/articles", articlesRoutes);

db.sequelize
  .sync()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Dallas Server is connected to db & running on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
