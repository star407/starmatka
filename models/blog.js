const mongoose = require("mongoose")
const dataSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true // `email` must be unique
    }
  });
const data = mongoose.model('db', dataSchema);

module.exports = data