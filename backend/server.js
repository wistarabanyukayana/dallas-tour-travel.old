require("dotenv").config();

const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");

// Local Imports
const db = require("./models");
const errorHandler = require("./utils/handlers/errorHandler");
const articlesRoutes = require("./routes/articlesRoutes");

// Express App
const app = express();

// Middleware
app.use(cors());
app.use(errorHandler);
app.use(fileUpload());
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/api/articles", articlesRoutes);

// Log HTTP Requests
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Initialize DB
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
