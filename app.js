const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const routes = require("./src/routes/index.js");

require("dotenv").config();

const app = express();

// Configuración de MongoDB
mongoose.connect(process.env.MONGODB_URI);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("src/public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));
app.use(expressLayouts);

// Rutas
app.use(routes);

// Escuchar en el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor en http://localhost:${PORT}/patients`)
);
