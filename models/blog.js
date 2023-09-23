const mongoose = require("mongoose")
const schema = mongoose.Schema 
const dataSchema = new schema({
    title: {
        type: String,
        required: true
    },
    numbertop: {
        type: String,
        default: '**'
    },
    numbermiddle: {
        type: String,
        default: '**'
    },
    numberbottom: {
        type: String,
        default: '**'
    },
},{timestamps:true, collection: 'data'})

const data = mongoose.model('data', dataSchema);

module.exports = data