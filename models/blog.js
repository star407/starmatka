const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
  entrydate: {type: String, unique: true, required: true},
  title: {type: String, required: true},
  patti1: {type: [Number]},
  patti2: {type: [Number]}
});
const data = mongoose.model('patti', dataSchema);

module.exports = data