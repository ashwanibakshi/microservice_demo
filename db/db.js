const mongoose = require("mongoose");

var db = mongoose
  .connect("mongodb://localhost:27017/microservice")
  .then(() => console.log("connected to db"))
  .catch((err) => console.log("connection error", err));

module.export = db;
