require("dotenv").config();

const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");

// Local Imports
const db = require("./models");
const errorHandler = require("./utils/handlers/errorHandler");
const articlesRoutes = require("./routes/articlesRoutes");

// Configs
const corsOptions = {
  origin: "http://localhost:3000",
};
const port = process.env.PORT || 5000;

// Express App
const app = express();

// Middleware
app.use(cors(corsOptions));
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

// Sequelize Options
db.sequelize.options.logging = (...msg) => console.log(`\n${msg[0]}`);

// Initialize DB
db.sequelize
  .sync({ logging: (...msg) => console.log(`\n${msg[0]}`) })
  .then(() => {
    app.listen(port, () => {
      console.log("\nDallas Server is connected to db & running on port", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
