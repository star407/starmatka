const mongoose = require('mongoose')
const dataSchema = new mongoose.Schema({
  entrydate: {type: String, required: true},
  title: {type: String, required: true},
  patti1: {type: [Number]},
  patti2: {type: [Number]}
},{ "strict": false })
dataSchema.index({ "entrydate": 1, "title": 1}, { "unique": true });
const data = mongoose.model('patti', dataSchema);

module.exports = data