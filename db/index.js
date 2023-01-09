const mongoose = require("mongoose");
const { urlDB } = require("../config");

mongoose.set("strictQuery", false);

mongoose.connect(urlDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

module.exports = db;
