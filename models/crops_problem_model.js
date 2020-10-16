const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: [{
        query: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }],
    img: {data: Buffer, contentType: String},
    crops: [{
        type: mongoose.SchemaTypes.ObjectID,
        ref: 'Crops'
    }]
})

module.exports = mongoose.model('Problems', problemSchema)
