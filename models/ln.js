const mongoose = require('mongoose')
const lnschema = new mongoose.Schema({
  title: {type: String, required: true},
  ln: {type: [Number]}
})
const lndata = mongoose.model('ln', lnschema);

module.exports = lndata