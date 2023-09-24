const mongoose = require("mongoose")
const schema = mongoose.Schema 
const dataSchema = new schema({
    title: {
        type: String,
        required: true
    },
    entrydate: {
        type: Date,
        unique: true,
        required: true
    },
    patti1: {
        type: [Number]

    },
    patti2: {
        type: [Number]

    }
})

const data = mongoose.model('data', dataSchema);

module.exports = data