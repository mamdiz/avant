const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var reservedTableSchema = new Schema({
  name: { type: "String", required: true },
  email: { type: "String", required: true },
  phonenumber: { type: "String", required: true },
  number: { type: "String", required: true },
  date: { type: "String", required: true },
  time: { type: "String", required: true },
  favorite: { type: "String", required: true },
  forwhat: { type: "String", required: true }
});

var reservedTableModel = mongoose.model(
  "reservedTable",
  reservedTableSchema,
  "reservedTable"
);
module.exports = reservedTableModel;
